import { getCategories, getPosts } from '@/libs/services/post';
import PageTitle from '@/components/page/Title';
import CategoryList from '@/components/category/List';
import PostList from '@/components/post/List';

const CategoryListPage = async () => {
  const categories = await getCategories();
  const posts = await getPosts();

  return (
    <>
      <PageTitle>Category</PageTitle>
      <CategoryList categories={categories} />
      <PostList postList={posts} />
    </>
  );
};

export default CategoryListPage;
