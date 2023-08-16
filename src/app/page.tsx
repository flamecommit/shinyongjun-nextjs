import AuthorProfile from '@/components/author/Profile';
import PostList from '@/components/post/List';
import { getPostList } from '@/services/post';

async function RootPage() {
  const postList = await getPostList();

  return (
    <>
      <AuthorProfile />
      {postList.length ? <PostList postList={postList} /> : <div>no</div>}
    </>
  );
}

export default RootPage;
