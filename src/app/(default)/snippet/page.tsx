import PageTitle from '@/components/page/Title';
import SnippetList from '@/components/snippet/List';
import { getSnippetList } from '@/services/snippet';

async function RootPage() {
  const snippetList = await getSnippetList();

  return (
    <>
      <PageTitle>Snippet</PageTitle>
      {snippetList.length ? (
        <SnippetList snippetList={snippetList} />
      ) : (
        <div>no</div>
      )}
    </>
  );
}

export default RootPage;
