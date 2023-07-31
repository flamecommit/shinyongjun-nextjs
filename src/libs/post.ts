import { sync } from "glob";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

const BASE_PATH = "/src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

type Post = {
  slug: string;
  title: string;
  body: string;
  published: boolean;
};

// const parsePost = (postPath: string): Post | undefined => {
//   try {
//     const file = fs.readFileSync(postPath, { encoding: "utf8" });
//     const { content, data } = matter(file);
//     const grayMatter = data as PostMatter;

//     if (grayMatter.draft) {
//       return;
//     }

//     return {
//       ...grayMatter,
//       tags: grayMatter.tags.filter(Boolean),
//       // date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
//       content,
//       slug: postPath
//         .slice(postPath.indexOf(BASE_PATH))
//         .replace("/src/posts", "/blog")
//         .replace("/index.mdx", ""),
//       // readingMinutes: Math.ceil(readingTime(content).minutes),
//       wordCount: content.split(/\s+/gu).length,
//     };
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const getAllPosts = () => {
//   const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
//   return postPaths.reduce<Post[]>((ac, postPath) => {
//     const post = parsePost(postPath);
//     if (!post) return ac;

//     return [...ac, post];
//   }, []);
// };

export const getPosts = async (): Promise<Array<Post | null>> => {
  const posts: string[] = sync(`${POSTS_PATH}/**/*.mdx`);

  return Promise.all(
    posts.map(async (file) => {
      const postContent = await fs.readFile(file, "utf8");
      const { data, content } = matter(postContent);
      const slug = file
        .slice(file.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, "")
        .replace("/index.mdx", "");

      if (data.published === false) {
        return null;
      }

      return {
        title: "",
        published: true,
        body: content,
        slug,
        ...data,
      };
    })
  );
};

export async function getPost(slug: string) {
  const posts = await getPosts();
  console.log("posts", posts);
  return posts.find((post) => post?.slug === slug) as Post;
}
