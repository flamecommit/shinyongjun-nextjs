import { getPosts } from "@/libs/post";
import Link from "next/link";

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
