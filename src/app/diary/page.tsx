import PageTitle from '@/components/page/Title';
import DiaryGiscus from '@/components/diary/Giscus';
import DiaryCalendar from '@/components/diary/Calendar';

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
