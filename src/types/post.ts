import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TPostFrontMatter = {
  title: string;
  date: Date;
  categories: string[];
  seriesId?: number;
  seriesTitle?: string;
};

export interface IPost extends TPostFrontMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

export type TSeries = {
  seriesId: number;
  seriesTitle: string;
  count: number;
};
