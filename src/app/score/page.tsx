import PageTitle from '@/components/page/Title';
import ScoreListWrapper from '@/components/score/ListWrapper';
import { getScoreList } from '@/services/score';

async function RootPage() {
  const scoreList = await getScoreList();

  return (
    <>
      <PageTitle>Score</PageTitle>
      {scoreList.length ? (
        <ScoreListWrapper scoreList={scoreList} />
      ) : (
        <div>no</div>
      )}
    </>
  );
}

export default RootPage;
