import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function CategoryLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default CategoryLayout;
