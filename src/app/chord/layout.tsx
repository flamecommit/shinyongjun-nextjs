import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function ChordLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default ChordLayout;
