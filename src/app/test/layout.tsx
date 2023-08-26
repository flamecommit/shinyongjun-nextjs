import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function TestLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default TestLayout;
