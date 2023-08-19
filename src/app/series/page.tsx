import PageTitle from '@/components/page/Title';
import { getSeries } from '@/services/post';
import SeriesList from '@/components/series/List';

async function SeriesPage() {
  const series = await getSeries();

  return (
    <>
      <PageTitle>Series List</PageTitle>
      <SeriesList series={series} />
    </>
  );
}

export default SeriesPage;
