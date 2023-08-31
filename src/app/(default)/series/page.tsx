import PageTitle from '@/components/page/Title';
import { getSeriesList } from '@/services/post';
import SeriesList from '@/components/series/List';

async function SeriesPage() {
  const seriesList = await getSeriesList();

  return (
    <>
      <PageTitle>Series List</PageTitle>
      <SeriesList seriesList={seriesList} />
    </>
  );
}

export default SeriesPage;
