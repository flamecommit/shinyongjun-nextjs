import AuthorDetails from '@/components/author/Details';
import AuthorProfile from '@/components/author/Profile';
import DefaultTemplate from '@/components/template/Default';

async function RootPage() {
  return (
    <DefaultTemplate>
      <AuthorProfile />
      <AuthorDetails />
    </DefaultTemplate>
  );
}

export default RootPage;
