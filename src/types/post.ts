import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TPostFrontMatter = {
  title: string;
  date: Date;
  categories: string[];
  series?: string;
};

export interface IPost extends TPostFrontMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

export type TSeries = {
  index: number;
  series: string | undefined;
  count: number;
};
