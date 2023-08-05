import AuthorProfile from '@/components/author/Profile';
import PostList from '@/components/post/List';
import { getPosts } from '@/services/post';

const RootPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <AuthorProfile />
      <PostList postList={posts} />
    </>
  );
};

export default RootPage;
