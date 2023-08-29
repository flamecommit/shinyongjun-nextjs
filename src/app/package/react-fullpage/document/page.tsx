import PackageDocumentViewer from '@/components/package/Viewer';
import PackageReactFullpageHeader from '@/components/package/react-fullpage/Header';
import { getPackageDocument } from '@/services/mdx';

async function PackageReactFullpageDocumentPage() {
  const document = await getPackageDocument(
    '/contents/package/react-fullpage/index.mdx',
  );

  return (
    <>
      <PackageReactFullpageHeader />
      <PackageDocumentViewer documentData={document} />
    </>
  );
}

export default PackageReactFullpageDocumentPage;
