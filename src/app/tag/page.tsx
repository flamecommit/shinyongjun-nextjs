import { getTags } from "@/libs/post";
import TagList from "@/components/tag/List";

const TagListPage = async () => {
  const tags = await getTags();

  return (
    <>
      <TagList tags={tags} />
    </>
  );
};

export default TagListPage;
