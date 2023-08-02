import PostList from "@/components/post/List";
import { getPostsByTag } from "@/libs/post";

type Props = {
  params: {
    slug: string;
  };
};

const PostListByTagPage = async ({ params }: Props) => {
  const { slug } = params;
  const posts = await getPostsByTag(slug);

  return <PostList postList={posts} />;
};

export default PostListByTagPage;
