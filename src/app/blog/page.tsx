import { getAllPosts } from "@/libs/post";
import Link from "next/link";

export default function Post() {
  const posts = getAllPosts();

  console.log(posts);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={post.slug}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
