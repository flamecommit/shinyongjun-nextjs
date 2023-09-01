import type { Metadata } from 'next';
import PackageHeader from '@/components/package/Header';

interface IProps {
  children: React.ReactNode;
  params: {
    packageName: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const title = `@shinyongjun/${params.packageName}`;
  const description = 'powered by @shinyongjun';

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      siteName: 'shinyongjun.com',
      description,
      images: process.env.OG_IMAGE,
    },
  };
}

function ReactFullpageLayout({ children, params }: IProps) {
  return (
    <>
      <PackageHeader packageName={params.packageName} />
      {children}
    </>
  );
}

export default ReactFullpageLayout;
