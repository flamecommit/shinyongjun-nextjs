import PageTitle from '@/components/page/Title';
import ScoreList from '@/components/score/List';
import { getScoreList } from '@/services/score';

async function RootPage() {
  const scoreList = await getScoreList();

  return (
    <>
      <PageTitle>Score</PageTitle>
      {scoreList.length ? <ScoreList scoreList={scoreList} /> : <div>no</div>}
    </>
  );
}

export default RootPage;
