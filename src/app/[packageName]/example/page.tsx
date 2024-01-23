import PackageReactDatepickerExample from '@/components/package/react-datepicker/Example';
import PackageReactDialogExample from '@/components/package/react-dialog/Example';
import PackageReactFullpageExample from '@/components/package/react-fullpage/Example';

type Props = {
  params: {
    packageName: string;
  };
};

export async function generateStaticParams() {
  const packageList = ['react-fullpage', 'react-datepicker', 'react-dialog'];

  return packageList.map((packageName) => ({
    packageName,
  }));
}

async function PackageExamplePage({ params }: Props) {
  return (
    <>
      {params.packageName === 'react-fullpage' && (
        <PackageReactFullpageExample />
      )}
      {params.packageName === 'react-datepicker' && (
        <PackageReactDatepickerExample />
      )}
      {params.packageName === 'react-dialog' && <PackageReactDialogExample />}
    </>
  );
}

export default PackageExamplePage;
