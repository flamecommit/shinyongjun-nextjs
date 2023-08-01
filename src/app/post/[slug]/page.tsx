import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPosts } from "@/libs/post";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  console.log(post, slug);

  return (
    <>
      <head>
        <title>{post.title}</title>
      </head>
      <div>
        <div>{post.title}</div>
        <MDXRemote source={post.body} />
      </div>
    </>
  );
}
