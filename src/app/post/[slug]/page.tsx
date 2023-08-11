import { Metadata } from 'next';
import { getPost, getPosts } from '@/services/post';
import PostViewer from '@/components/post/Viewer';
import PostGiscus from '@/components/post/Giscus';
import AuthorProfile from '@/components/author/Profile';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: `shinyongjun | Post - ${post.title}`,
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
      <AuthorProfile postDetail />
      <PostGiscus />
    </>
  );
};

export default PostViewPage;
