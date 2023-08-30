import { Metadata } from 'next';
import { getPost, getPostList } from '@/services/post';
import PostViewer from '@/components/post/Viewer';
import Giscus from '@/components/common/Giscus';
import AuthorProfile from '@/components/author/Profile';
import PostNavigation from '@/components/post/Navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const { post } = await getPost(slug);
  let description = post.title;

  if (post.seriesTitle) {
    description = `${post.seriesTitle} - ${description}`;
  }

  return {
    title: `${post.title}`,
    description,
    openGraph: {
      title: post.title,
      description,
      images: process.env.OG_IMAGE,
    },
  };
}

export async function generateStaticParams() {
  const postList = await getPostList();

  return postList.map((post) => ({
    slug: post.slug,
  }));
}

const PostViewPage = async ({ params }: Props) => {
  const { slug } = params;
  const { post, nextPost, prevPost } = await getPost(slug);

  return (
    <>
      <PostViewer postData={post} />
      <PostNavigation prevPost={prevPost} nextPost={nextPost} />
      <AuthorProfile postDetail />
      <Giscus />
    </>
  );
};

export default PostViewPage;
