import PackageDocumentViewer from '@/components/package/Viewer';
import { getPackageDocument } from '@/services/mdx';

async function PackageReactFullpageDocumentPage() {
  const document = await getPackageDocument(
    '/contents/package/react-fullpage/index.mdx',
  );

  return <PackageDocumentViewer documentData={document} />;
}

export default PackageReactFullpageDocumentPage;
