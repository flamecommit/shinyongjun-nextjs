import type { Metadata } from 'next';
import PackageReactFullpageHeader from '@/components/package/react-fullpage/Header';

interface Props {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  const title = '@shinyongjun/react-fullpage';
  const description = 'This is a Fullpage library that operates in React.';

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

function ReactFullpageLayout({ children }: Props) {
  return (
    <>
      <PackageReactFullpageHeader />
      {children}
    </>
  );
}

export default ReactFullpageLayout;
