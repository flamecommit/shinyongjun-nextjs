import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import ChordFinder from '@/components/chord/Finder';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Guitar Chord Finder';
  const description = `You can use the fretboard to create the chord.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: process.env.OG_IMAGE,
    },
  };
}

const DiaryPage = async () => {
  return (
    <>
      <PageTitle>Chord Finder</PageTitle>
      <ChordFinder />
    </>
  );
};

export default DiaryPage;
