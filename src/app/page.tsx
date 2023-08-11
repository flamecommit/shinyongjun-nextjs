import AuthorProfile from '@/components/author/Profile';
import PostList from '@/components/post/List';
import { getPosts } from '@/services/post';

const RootPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <AuthorProfile />
      {posts.length ? <PostList postList={posts} /> : <div>no</div>}
    </>
  );
};

export default RootPage;
