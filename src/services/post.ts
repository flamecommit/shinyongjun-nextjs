import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import remarkBreaks from 'remark-breaks';
import { extractLastDirectory, mdxFilePath, transformImgSrc } from './mdx';

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

const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const mdxPath = mdxFilePath(postPath, BASE_PATH);
  const slug = extractLastDirectory(postPath);

  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkBreaks,
        [transformImgSrc, { mdxPath, path: POSTS_PATH }],
      ],
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

export const getPostList = async (): Promise<Post[]> => {
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
  const postList = await getPostList();
  const postIndex = postList.findIndex((post) => post?.slug === slug);
  const nextPost = postList[postIndex - 1];
  const prevPost = postList[postIndex + 1];

  return {
    post: postList[postIndex],
    nextPost,
    prevPost,
  };
};

function removeDuplicatesBySeries(arr: Array<Post>) {
  const seen = new Set();
  return arr.filter((item) => {
    const value = item.series;
    if (value !== undefined && !seen.has(value)) {
      seen.add(value);
      return true;
    }
    return false;
  });
}

export const getSeries = async () => {
  const postList = await getPostList();
  const uniqueSeries = removeDuplicatesBySeries(postList);

  return uniqueSeries.map((post, index) => {
    return {
      index: index + 1,
      series: post.series,
      count: postList.filter((item) => item.series === post.series).length,
    };
  });
};

export const getCategories = async () => {
  const result: string[] = [];
  const postList = await getPostList();
  const flattenedCategories = postList.flatMap((post) => post.categories);
  const uniqueCategories = new Set(flattenedCategories);

  uniqueCategories.forEach((category) => {
    result.push(category);
  });

  return result;
};

export const getPostListByCategory = async (category: string) => {
  const postList = await getPostList();

  return postList.filter((post) => {
    return post.categories.includes(category);
  });
};

export const getPostListBySeries = async (series: string | undefined) => {
  const postList = await getPostList();

  return postList.filter((post) => {
    return post.series === series;
  });
};
