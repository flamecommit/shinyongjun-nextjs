import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import ChordGenerator from '@/components/chord/Generator';

export const metadata: Metadata = {
  title: 'Guitar Chord Generator',
  description: `You can use the fretboard to create the chord.`,
  openGraph: {
    title: `Guitar Chord Generator`,
    description: `You can use the fretboard to create the chord.`,
    images: process.env.OG_IMAGE,
  },
};

const DiaryPage = async () => {
  return (
    <>
      <PageTitle>Chord Generator</PageTitle>
      <ChordGenerator />
    </>
  );
};

export default DiaryPage;
