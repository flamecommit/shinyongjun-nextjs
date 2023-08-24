import { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostListByCategory, getCategories } from '@/services/category';
import CategoryList from '@/components/category/List';
import { capitalizeString } from '@/utils/string';
import SnippetList from '@/components/snippet/List';

type RouteType = {
  board: string;
  slug: string;
};

interface Props {
  params: RouteType;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { board, slug } = params;

  return {
    title: `${capitalizeString(board)}Category - ${slug}`,
  };
}

export async function generateStaticParams() {
  const postCategoryList = await getCategories('post');
  const snippetCategoryList = await getCategories('snippet');

  const addCategoriesToRouteList = (
    categoryList: string[],
    board: string,
  ): RouteType[] =>
    categoryList.map((category) => ({
      board,
      slug: category,
    }));

  const postRoutes = addCategoriesToRouteList(postCategoryList, 'post');
  const snippetRoutes = addCategoriesToRouteList(
    snippetCategoryList,
    'snippet',
  );

  return [...postRoutes, ...snippetRoutes];
}

const PostListByCategoryPage = async ({ params }: Props) => {
  const { board, slug } = params;
  const categories = await getCategories(board);
  const articleList = await getPostListByCategory(board, slug);

  return (
    <>
      <PageTitle>
        {capitalizeString(board)}Category - {slug}
      </PageTitle>
      <CategoryList board={board} categories={categories} />
      {board === 'post' && <PostList postList={articleList} />}
      {board === 'snippet' && <SnippetList snippetList={articleList} />}
    </>
  );
};

export default PostListByCategoryPage;
