import { sync } from "glob";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

const BASE_PATH = "/src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export type Post = {
  slug: string;
  title: string;
  body: string;
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

      return {
        ...data,
        slug: slug,
        body: content,
      } as Post;
    })
  );
};

export async function getPost(slug: string) {
  const posts = await getPosts();
  console.log("posts", posts);
  return posts.find((post) => post?.slug === slug) as Post;
}
