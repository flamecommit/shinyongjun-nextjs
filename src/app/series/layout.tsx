import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function SeriesLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default SeriesLayout;
