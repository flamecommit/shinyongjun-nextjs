import { getAllPosts } from "@/libs/post";

export default function Post() {
  const posts = getAllPosts();

  return (
    <div>
      {posts.map((post) => {
        return <div key={post.slug}>{post.slug}</div>;
      })}
    </div>
  );
}
