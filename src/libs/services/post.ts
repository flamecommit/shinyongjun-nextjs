import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';
import { Node, Parent } from 'unist';
import { getExtensionOfFilename } from '@/libs/utils/file';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

interface Matter {
  title: string;
  date: Date;
  categories: string[];
}

export interface Post extends Matter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

type Image = {
  url: string;
};

export const getPosts = async (): Promise<Post[]> => {
  const posts: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const result = await Promise.all(
    posts.map(async (file) => {
      const postContent = await fs.promises.readFile(file, 'utf8');
      const { data, content } = matter(postContent);
      const slug = file
        .slice(file.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, '')
        .replace('/index.mdx', '');
      const mdx = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [[transformImgSrc, { slug }]],
          rehypePlugins: [rehypeHighlight],
        },
      });

      return {
        ...data,
        slug,
        mdx,
      } as Post;
    }),
  );

  return result.sort((a: Post, b: Post) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();

  return posts.find((post) => post?.slug === slug) as Post;
};

export const getCategories = async () => {
  const result: string[] = [];
  const posts = await getPosts();
  const flattenedCategories = posts.flatMap((post) => post.categories);
  const uniqueCategories = new Set(flattenedCategories);

  uniqueCategories.forEach((category) => {
    result.push(category);
  });

  return result;
};

export const getPostsByCategory = async (category: string) => {
  const posts = await getPosts();

  return posts.filter((post) => {
    return post.categories.includes(category);
  });
};

export const transformImgSrc = ({ slug }: { slug: string }) => {
  return (tree: Node) => {
    visit(tree, 'paragraph', (node: Parent) => {
      const image = node.children.find(
        (child: { type: string }) => child.type === 'image',
      ) as Image | undefined;

      if (image) {
        const fileName = image.url.replace('./', '');
        const imageUrl = `./posts/${slug}/${fileName}`;
        const imageBuffer = fs.readFileSync(imageUrl);
        const base64String = imageBuffer.toString('base64');
        const extension = getExtensionOfFilename(fileName);
        image.url = `data:image/${extension};base64,${base64String}`;
      }
    });
  };
};
