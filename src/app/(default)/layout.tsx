import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default DefaultLayout;
