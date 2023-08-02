import { sync } from "glob";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import transformImgSrc from "./transMdxImgSrc";
import remarkEmbedImages from "remark-embed-images";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export type Post = {
  title: string;
  date: Date;
  tags: string[];
  slug: string;
  mdx: MDXRemoteSerializeResult;
};

export const getPosts = async (): Promise<Array<Post>> => {
  const posts: string[] = sync(`${POSTS_PATH}/**/*.mdx`);

  return Promise.all(
    posts.map(async (file) => {
      const postContent = await fs.readFile(file, "utf8");
      const { data, content } = matter(postContent);
      const slug = file
        .slice(file.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, "")
        .replace("/index.mdx", "");
      const mdx = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [[transformImgSrc, { slug }], remarkEmbedImages],
          rehypePlugins: [rehypeHighlight],
        },
      });

      return {
        ...data,
        slug: slug,
        mdx: mdx,
      } as unknown as Post;
    })
  );
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();

  return posts.find((post) => post?.slug === slug) as Post;
};

export const getTags = async () => {
  const result: string[] = [];
  const posts = await getPosts();
  const flattenedTags = posts.flatMap((post) => post["tags"]);
  const uniqueTags = new Set(flattenedTags);

  uniqueTags.forEach((tag) => {
    result.push(tag);
  });

  return result;
};

export const getPostsByTag = async (tag: string) => {
  const posts = await getPosts();

  return posts.filter((post) => {
    return post.tags.includes(tag);
  });
};
