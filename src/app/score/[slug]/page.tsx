import { Metadata } from 'next';
import { getScoreList, getScore } from '@/services/score';
import ScoreViewer from '@/components/score/Viewer';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const { score } = await getScore(slug);

  return {
    title: `shinyongjun - Score | ${score.artist} - ${score.title}`,
  };
}

export async function generateStaticParams() {
  const scoreList = await getScoreList();

  return scoreList.map((score) => ({
    slug: score.slug,
  }));
}

const ScoreViewPage = async ({ params }: Props) => {
  const { slug } = params;
  const { score } = await getScore(slug);

  return (
    <>
      <ScoreViewer scoreData={score} />
    </>
  );
};

export default ScoreViewPage;
