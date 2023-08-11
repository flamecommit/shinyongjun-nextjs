import type { Metadata } from 'next';
import AuthorDetails from '@/components/author/Details';
import AuthorProfile from '@/components/author/Profile';
import PageTitle from '@/components/page/Title';

export const metadata: Metadata = {
  title: 'shinyongjun | About',
};

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
