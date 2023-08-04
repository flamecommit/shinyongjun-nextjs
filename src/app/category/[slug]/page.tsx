import { Metadata, ResolvingMetadata } from 'next';
import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostsByCategory, getCategories } from '@/libs/post';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const parentTitle = (await parent).title?.absolute;

  return {
    title: `${parentTitle} | category - ${slug}`,
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category,
  }));
}

const PostListByCategoryPage = async ({ params }: Props) => {
  const { slug } = params;
  const posts = await getPostsByCategory(slug);

  return (
    <>
      <PageTitle>Category - {slug}</PageTitle>
      <PostList postList={posts} />
    </>
  );
};

export default PostListByCategoryPage;
