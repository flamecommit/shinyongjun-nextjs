import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TFrontMatter = {
  title: string;
  date: Date;
  categories: string[];
  series?: string;
};

export interface IPost extends TFrontMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

export type TSeries = {
  index: number;
  series: string | undefined;
  count: number;
};
