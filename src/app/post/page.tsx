import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostList, getSeries } from '@/services/post';

async function RootPage() {
  const seriesList = await getSeries();
  const postList = await getPostList();

  return (
    <>
      <PageTitle>Post</PageTitle>
      {postList.length ? (
        <PostList
          postList={postList.map((post) => {
            return {
              seriesId: seriesList.find(
                (series) => series.series === post.series,
              )?.index,
              ...post,
            };
          })}
        />
      ) : (
        <div>no</div>
      )}
    </>
  );
}

export default RootPage;
