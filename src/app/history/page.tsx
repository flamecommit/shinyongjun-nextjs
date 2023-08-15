import type { Metadata } from 'next';
import HistoryWrapper from '@/components/history/Wrapper';
import PageTitle from '@/components/page/Title';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `shinyongjun - History`,
  };
}

const HistoryPage = async () => {
  return (
    <>
      <PageTitle>History</PageTitle>
      <HistoryWrapper />
    </>
  );
};

export default HistoryPage;
