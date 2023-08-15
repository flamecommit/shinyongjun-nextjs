import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import ChordList from '@/components/chord/List';

export const metadata: Metadata = {
  title: 'shinyongjun - Chord',
};

const DiaryPage = async () => {
  return (
    <>
      <PageTitle>Chord</PageTitle>
      <ChordList />
    </>
  );
};

export default DiaryPage;
