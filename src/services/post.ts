import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';
import { Node, Parent } from 'unist';
import rehypeCodeTitles from 'rehype-code-titles';
import remarkBreaks from 'remark-breaks';
import { getExtensionOfFilename } from '@/utils/file';

const BASE_PATH = '/contents/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

interface PostMatter {
  title: string;
  date: Date;
  categories: string[];
  series?: string;
}

export interface Post extends PostMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

export interface SeriesType {
  index: number;
  series: string | undefined;
  count: number;
}

type Image = {
  type: string;
  url: string;
  alt: string;
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
      remarkPlugins: [remarkBreaks, [transformImgSrc, { slug }]],
      rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
      format: 'mdx',
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
  const postIndex = posts.findIndex((post) => post?.slug === slug);
  const nextPost = posts[postIndex - 1];
  const prevPost = posts[postIndex + 1];

  return {
    post: posts[postIndex],
    nextPost,
    prevPost,
  };
};

function removeDuplicatesByKey(arr: Array<any>, key: string) {
  const seen = new Set();
  return arr.filter((item) => {
    const value = item[key];
    if (value !== undefined && !seen.has(value)) {
      seen.add(value);
      return true;
    }
    return false;
  });
}

export const getSeries = async () => {
  const posts = await getPosts();
  const uniqueSeries = removeDuplicatesByKey(posts, 'series');

  return uniqueSeries.map((post, index) => {
    return {
      index: index + 1,
      series: post.series,
      count: posts.filter((item) => item.series === post.series).length,
    };
  });
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

export const getPostsBySeries = async (series: string) => {
  const posts = await getPosts();

  return posts.filter((post) => {
    return post.series === series;
  });
};

const transformImgSrc = ({ slug }: { slug: string }) => {
  return (tree: Node) => {
    visit(tree, 'paragraph', (node: Parent) => {
      const image = node.children.find(
        (child: { type: string }) => child.type === 'image',
      ) as Image | undefined;

      if (image === undefined) return;

      const fileName = image.url.replace('./', '');
      const imageUrl = `${POSTS_PATH}/${slug}/${fileName}`;
      const imageBuffer = fs.readFileSync(imageUrl);
      const base64String = imageBuffer.toString('base64');
      const extension = getExtensionOfFilename(fileName);
      image.url = `data:image/${extension};base64,${base64String}`;

      if (!image.alt) return;

      const citeNode = {
        type: 'mdxJsxFlowElement',
        name: 'cite',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'className', value: 'image-cite' },
        ],
        children: [{ type: 'text', value: image.alt }],
      };

      node.children.push(citeNode);
    });
  };
};
