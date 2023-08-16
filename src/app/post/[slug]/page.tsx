import { Metadata } from 'next';
import { getPost, getPosts, getSeries } from '@/services/post';
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

  return {
    title: `shinyongjun - Post | ${post.title}`,
    description: `shinyongjun - Post`,
    openGraph: {
      title: post.title,
      description: `shinyongjun - Post`,
      images: 'https://shinyongjun.com/og-image.png',
    },
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
  const { post, nextPost, prevPost } = await getPost(slug);
  const series = await getSeries();
  const seriesIndex = series.find((item) => item.series === post.series)?.index;

  return (
    <>
      <PostViewer
        postData={{
          ...post,
          seriesIndex,
        }}
      />
      <PostNavigation prevPost={prevPost} nextPost={nextPost} />
      <AuthorProfile postDetail />
      <Giscus />
    </>
  );
};

export default PostViewPage;
