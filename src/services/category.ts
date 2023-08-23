import { getPostList, Post } from './post';
import { getSnippetList, Snippet } from './snippet';

export const getCategories = async (board: string) => {
  let articleList: Array<Post | Snippet> = [];

  if (board === 'post') {
    articleList = await getPostList();
  }

  if (board === 'snippet') {
    articleList = await getSnippetList();
  }

  const result: string[] = [];
  const flattenedCategories = articleList.flatMap(
    (article) => article.categories,
  );
  const uniqueCategories = new Set(flattenedCategories);

  uniqueCategories.forEach((category) => {
    result.push(category);
  });

  return result;
};

export const getPostListByCategory = async (
  board: string,
  category: string,
) => {
  let articleList: Array<Post | Snippet> = [];

  if (board === 'post') {
    articleList = await getPostList();
  }

  if (board === 'snippet') {
    articleList = await getSnippetList();
  }

  return articleList.filter((article) => {
    return article.categories.includes(category);
  });
};
