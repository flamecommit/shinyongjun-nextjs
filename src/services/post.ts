import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';
import { Node, Parent } from 'unist';
import { getExtensionOfFilename } from '@/utils/file';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

interface PostMatter {
  title: string;
  date: Date;
  categories: string[];
}

export interface Post extends PostMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

type Image = {
  url: string;
};

const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const slug = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('/index.mdx', '');
  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[transformImgSrc, { slug }]],
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    ...grayMatter,
    slug,
    mdx,
  };
};

export const getPosts = async (): Promise<Post[]> => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const result = await Promise.all(
    postPaths.map((postPath) => {
      return parsePost(postPath);
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
