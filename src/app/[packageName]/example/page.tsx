import PackageReactFullpageExample from '@/components/package/react-fullpage/Example';

type Props = {
  params: {
    packageName: string;
  };
};

export async function generateStaticParams() {
  const packageList = ['react-fullpage'];

  return packageList.map((packageName) => ({
    packageName,
  }));
}

async function PackageReactFullpagePage({ params }: Props) {
  return (
    <>
      {params.packageName === 'react-fullpage' && (
        <PackageReactFullpageExample />
      )}
    </>
  );
}

export default PackageReactFullpagePage;
