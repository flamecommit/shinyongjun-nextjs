import { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostListBySeries, getSeries } from '@/services/post';
import PageLink from '@/components/page/Link';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Series - ${slug}`,
  };
}

export async function generateStaticParams() {
  const series = await getSeries();

  return series.map((item) => ({
    slug: String(item.index),
  }));
}

const PostListByCategoryPage = async ({ params }: Props) => {
  const { slug } = params;
  const series = await getSeries();
  const seriesText = series.find((item) => String(item.index) === slug)?.series;
  const postList = await getPostListBySeries(seriesText);

  return (
    <>
      <PageTitle>Series - {seriesText}</PageTitle>
      <PageLink href="/series">Go to Series List</PageLink>
      <PostList postList={postList} />
    </>
  );
};

export default PostListByCategoryPage;
