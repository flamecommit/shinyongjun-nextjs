import type { Metadata } from 'next';
import { getCategories, getPostList } from '@/services/post';
import PageTitle from '@/components/page/Title';
import CategoryList from '@/components/category/List';
import PostList from '@/components/post/List';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `shinyongjun - Category`,
  };
}

const CategoryListPage = async () => {
  const categories = await getCategories();
  const postList = await getPostList();

  return (
    <>
      <PageTitle>Category</PageTitle>
      <CategoryList categories={categories} />
      <PostList postList={postList} />
    </>
  );
};

export default CategoryListPage;
