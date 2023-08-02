import { Metadata } from 'next';
import { getPost, getPosts } from '@/libs/post';
import PostViewer from '@/components/post/Viewer';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostViewPage = async ({ params }: Props) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <>
      <PostViewer postData={post} />
    </>
  );
};

export default PostViewPage;
