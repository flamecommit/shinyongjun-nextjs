import { Metadata, ResolvingMetadata } from 'next';
import PageTitle from '@/components/page/Title';
import PostList from '@/components/post/List';
import { getPostsByTag, getTags } from '@/libs/post';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const parentTitle = (await parent).title?.absolute;

  return {
    title: `${parentTitle} | tag - ${slug}`,
  };
}

export async function generateStaticParams() {
  const tags = await getTags();

  return tags.map((tag) => ({
    slug: tag,
  }));
}

const PostListByTagPage = async ({ params }: Props) => {
  const { slug } = params;
  const posts = await getPostsByTag(slug);

  return (
    <>
      <PageTitle>Tag - {slug}</PageTitle>
      <PostList postList={posts} />
    </>
  );
};

export default PostListByTagPage;