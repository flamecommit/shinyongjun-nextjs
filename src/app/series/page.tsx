import Link from 'next/link';
import PageTitle from '@/components/page/Title';
import { getSeries } from '@/services/post';

async function SeriesPage() {
  const series = await getSeries();

  return (
    <>
      <PageTitle>Series</PageTitle>
      {series.map((item) => {
        return (
          <div>
            <Link href={`/series/${item.index}`}>{item.series}</Link>
          </div>
        );
      })}
    </>
  );
}

export default SeriesPage;
