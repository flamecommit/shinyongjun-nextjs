import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import ChordFinder from '@/components/chord/Finder';

export const metadata: Metadata = {
  title: 'Guitar Chord Finder',
  description: `You can use the fretboard to create the chord.`,
  openGraph: {
    title: `Guitar Chord Finder`,
    description: `You can use the fretboard to create the chord.`,
    images: process.env.OG_IMAGE,
  },
};

const DiaryPage = async () => {
  return (
    <>
      <PageTitle>Chord Finder</PageTitle>
      <ChordFinder />
    </>
  );
};

export default DiaryPage;
