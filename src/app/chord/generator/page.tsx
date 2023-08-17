import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import ChordGenerator from '@/components/chord/Generator';

export const metadata: Metadata = {
  title: 'shinyongjun - Chord Generator',
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
