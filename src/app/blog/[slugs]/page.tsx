import { getAllPosts } from "@/libs/post";
import { MDXRemote } from "next-mdx-remote/rsc";

type PostMatter = {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
  date: string;
};

type Post = PostMatter & {
  slug: string;
  content: string;
  wordCount: number;
};

export default async function PostPage({ params }: { params: object }) {
  const { slugs } = params as { slugs: string[] };

  const post: Post | undefined = getAllPosts().find(
    (v) => v.slug === `/blog/${slugs}`
  );

  return (
    <div>
      <div className="title">{post?.title}</div>
      {post?.content ? <MDXRemote source={post?.content} /> : ""}
    </div>
  );
}
