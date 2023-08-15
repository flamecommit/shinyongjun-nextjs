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
    description: `${score.artist}의 ${score.title} 코드 악보 입니다.`,
    keywords: [score.artist, score.title, '악보', '코드'],
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
