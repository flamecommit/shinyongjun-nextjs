import { getAllPosts } from "@/libs/post";
import { serializeMdx } from "@/libs/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function PostPage({ params }: { params: object }) {
  const { slugs } = params as { slugs: string[] };

  const post: any = getAllPosts().find((v) => v.slug === `/blog/${slugs}`);
  const mdx: any = await serializeMdx(post.content);

  console.log("----------------------------------------");
  console.log(mdx);

  return (
    <div>
      <div className="title">{post.title}</div>
      <MDXRemote source={post.content} />
    </div>
  );
}
