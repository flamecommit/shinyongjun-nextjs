import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function HistoryLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default HistoryLayout;
