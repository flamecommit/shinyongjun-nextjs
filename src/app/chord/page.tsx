import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import ChordList from '@/components/chord/List';
import PageLink from '@/components/page/Link';

export const metadata: Metadata = {
  title: 'Guitar Chord Chart',
};

const DiaryPage = async () => {
  return (
    <>
      <PageTitle>Chord</PageTitle>
      <PageLink href="/chord/generator">Go to Chord Finder</PageLink>
      <ChordList />
    </>
  );
};

export default DiaryPage;
