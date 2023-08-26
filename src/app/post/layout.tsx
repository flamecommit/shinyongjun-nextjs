import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function PostLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default PostLayout;
