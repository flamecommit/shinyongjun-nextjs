import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TSnippetMatter = {
  title: string;
  date: Date;
  categories: string[];
  description?: string;
};

export interface ISnippet extends TSnippetMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}
