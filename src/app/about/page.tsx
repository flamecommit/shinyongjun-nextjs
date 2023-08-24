import AuthorDetails from '@/components/author/Details';
import AuthorProfile from '@/components/author/Profile';
import PageTitle from '@/components/page/Title';

const AboutPage = async () => {
  return (
    <>
      <PageTitle>About</PageTitle>
      <AuthorProfile />
      <AuthorDetails />
    </>
  );
};

export default AboutPage;
