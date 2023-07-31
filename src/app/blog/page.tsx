import { getPosts } from "@/libs/post";
import Link from "next/link";

type Post = {
  slug: string;
  content: string;
  title: number;
  body: any;
};

export default async function Post() {
  const posts = (await getPosts()) as unknown as Post[];

  console.log(posts);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
