import type { Metadata } from 'next';
import PageTitle from '@/components/page/Title';
import DiaryGiscus from '@/components/diary/Giscus';
import DiaryCalendar from '@/components/diary/Calendar';

export const metadata: Metadata = {
  title: 'Diary',
};

const DiaryPage = async () => {
  return (
    <>
      <PageTitle>Diary</PageTitle>
      <DiaryCalendar />
      <DiaryGiscus />
    </>
  );
};

export default DiaryPage;
