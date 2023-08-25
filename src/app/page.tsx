import AuthorDetails from '@/components/author/Details';
import AuthorProfile from '@/components/author/Profile';

async function RootPage() {
  return (
    <>
      <AuthorProfile />
      <AuthorDetails />
    </>
  );
}

export default RootPage;
