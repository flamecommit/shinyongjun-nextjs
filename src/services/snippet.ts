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

const BASE_PATH = '/contents/snippets';
const SNIPPETS_PATH = path.join(process.cwd(), BASE_PATH);

interface SnippetMatter {
  title: string;
  date: Date;
  categories: string[];
  description?: string;
}

export interface Snippet extends SnippetMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

const parseSnippet = async (snippetPath: string): Promise<Snippet> => {
  const file = fs.readFileSync(snippetPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as SnippetMatter;
  const mdxPath = mdxFilePath(snippetPath, BASE_PATH);
  const slug = extractLastDirectory(snippetPath);

  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkBreaks,
        [transformImgSrc, { mdxPath, path: SNIPPETS_PATH }],
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

export const getSnippetList = async (): Promise<Snippet[]> => {
  const snippetPaths: string[] = sync(`${SNIPPETS_PATH}/**/*.mdx`);
  const result = await Promise.all(
    snippetPaths.map((snippetPath) => {
      return parseSnippet(snippetPath);
    }),
  );

  return result.sort((a: Snippet, b: Snippet) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });
};

export const getSnippet = async (slug: string) => {
  const snippetList = await getSnippetList();
  const snippetIndex = snippetList.findIndex(
    (snippet) => snippet?.slug === slug,
  );
  const nextSnippet = snippetList[snippetIndex - 1];
  const prevSnippet = snippetList[snippetIndex + 1];

  return {
    snippet: snippetList[snippetIndex],
    nextSnippet,
    prevSnippet,
  };
};
