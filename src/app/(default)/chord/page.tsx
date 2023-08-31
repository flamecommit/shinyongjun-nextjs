import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import ChordList from '@/components/chord/List';
import PageLink from '@/components/page/Link';

export const metadata: Metadata = {
  title: 'Guitar Chord Chart',
};

const ChordPage = async () => {
  return (
    <>
      <PageTitle>Chord</PageTitle>
      <PageLink href="/chord/finder">Go to Chord Finder</PageLink>
      <ChordList />
    </>
  );
};

export default ChordPage;
