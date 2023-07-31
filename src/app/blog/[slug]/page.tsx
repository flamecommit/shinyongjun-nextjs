import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/libs/post";

type Post = {
  slug: string;
  title: string;
  body: string;
  published: boolean;
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  console.log(post, slug);

  return (
    <div>
      <div>{post.title}</div>
      <MDXRemote source={post.body} />
    </div>
  );
}
