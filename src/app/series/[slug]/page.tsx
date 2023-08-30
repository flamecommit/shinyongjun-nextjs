import { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostListBySeries, getSeriesList } from '@/services/post';
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
  const series = await getSeriesList();

  return series.map((item) => ({
    slug: String(item.seriesId),
  }));
}

const PostListByCategoryPage = async ({ params }: Props) => {
  const { slug } = params;
  const series = await getSeriesList();
  const seriesId = Number(slug);
  const seriesText = series.find((item) => item.seriesId === seriesId)
    ?.seriesTitle;
  const postList = await getPostListBySeries(Number(slug));

  return (
    <>
      <PageTitle>Series - {seriesText}</PageTitle>
      <PageLink href="/series">Go to Series List</PageLink>
      <PostList postList={postList} isBySeries />
    </>
  );
};

export default PostListByCategoryPage;
