import { getPosts } from "@/libs/post";
import Link from "next/link";

export default async function Post() {
  const posts = await getPosts();

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
