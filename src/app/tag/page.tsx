import { getTags } from '@/libs/post';
import TagList from '@/components/tag/List';
import PageTitle from '@/components/page/Title';

const TagListPage = async () => {
  const tags = await getTags();

  return (
    <>
      <PageTitle>Tag</PageTitle>
      <TagList tags={tags} />
    </>
  );
};

export default TagListPage;
