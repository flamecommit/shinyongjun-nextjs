import PostList from "@/components/post/List";
import { getPosts } from "@/libs/post";

const RootPage = async () => {
  const posts = await getPosts();

  return <PostList postList={posts} />;
};

export default RootPage;
