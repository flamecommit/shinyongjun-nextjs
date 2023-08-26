import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function SnippetLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default SnippetLayout;
