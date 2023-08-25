// import { Metadata } from 'next';
import { getScoreList, getScore } from '@/services/score';
import ScoreViewer from '@/components/score/Viewer';
// import Giscus from '@/components/common/Giscus';
// import AuthorProfile from '@/components/author/Profile';

type Props = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = params;
//   const { score } = await getScore(slug);
//   const title = `${score.artist} - ${score.title} 기타 코드 가사 악보`;
//   const description = `${score.artist} - ${score.title} 키조절이 가능한 코드 악보입니다. 코드를 클릭하면 코드표가 나와요.`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       images: process.env.OG_IMAGE,
//     },
//   };
// }

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
      {/* <AuthorProfile postDetail />
      <Giscus /> */}
    </>
  );
};

export default ScoreViewPage;
