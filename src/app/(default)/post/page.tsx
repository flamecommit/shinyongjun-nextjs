import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostList } from '@/services/post';

async function RootPage() {
  const postList = await getPostList();

  return (
    <>
      <PageTitle>Post</PageTitle>
      {postList.length ? <PostList postList={postList} /> : <div>no</div>}
    </>
  );
}

export default RootPage;
