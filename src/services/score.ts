import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import remarkBreaks from 'remark-breaks';
import { transformImgSrc } from './mdx';

const BASE_PATH = '/contents/score';
const SCORE_PATH = path.join(process.cwd(), BASE_PATH);

interface ScoreMatter {
  title: string;
  artist: string;
  releaseYear: number;
  capo: number;
}

export interface Score extends ScoreMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

const parseScore = async (scorePath: string): Promise<Score> => {
  const file = fs.readFileSync(scorePath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as ScoreMatter;
  const slug = scorePath
    .slice(scorePath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('/index.mdx', '');
  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkBreaks,
        [transformImgSrc, { slug, path: SCORE_PATH }],
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

export const getScoreList = async (): Promise<Score[]> => {
  const scorePaths: string[] = sync(`${SCORE_PATH}/**/*.mdx`);
  const result = await Promise.all(
    scorePaths.map((scorePath) => {
      return parseScore(scorePath);
    }),
  );

  return result.sort((a: Score, b: Score) => {
    const slugA = Number(a.slug);
    const slugB = Number(b.slug);

    if (slugA > slugB) return -1;
    if (slugA < slugB) return 1;
    return 0;
  });
};

export const getScore = async (slug: string) => {
  const scoreList = await getScoreList();
  const scoreIndex = scoreList.findIndex((score) => score?.slug === slug);

  return {
    score: scoreList[scoreIndex],
  };
};
