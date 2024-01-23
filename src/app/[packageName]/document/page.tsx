import PackageDocumentViewer from '@/components/package/Viewer';
import { getSingleDocument } from '@/services/mdx';

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

async function PackageReactFullpageDocumentPage({ params }: Props) {
  const document = await getSingleDocument(
    `/contents/package/${params.packageName}/index.mdx`,
  );

  return <PackageDocumentViewer documentData={document} />;
}

export default PackageReactFullpageDocumentPage;
