import { Metadata, ResolvingMetadata } from 'next';
import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostsByCategory, getCategories } from '@/services/post';
import CategoryList from '@/components/category/List';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  // const parentTitle = (await parent).title?.absolute;

  return {
    title: `Category - ${slug}`,
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
  const categories = await getCategories();
  const posts = await getPostsByCategory(slug);

  return (
    <>
      <PageTitle>Category - {slug}</PageTitle>
      <CategoryList categories={categories} />
      <PostList postList={posts} />
    </>
  );
};

export default PostListByCategoryPage;
