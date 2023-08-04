import { getCategories } from '@/libs/post';
import PageTitle from '@/components/page/Title';
import CategoryList from '@/components/category/List';

const CategoryListPage = async () => {
  const categories = await getCategories();

  return (
    <>
      <PageTitle>Categories</PageTitle>
      <CategoryList categories={categories} />
    </>
  );
};

export default CategoryListPage;
