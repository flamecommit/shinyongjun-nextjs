import { getSingleDocument } from '@/services/mdx';
import ReactDialogMdx from './Mdx';

async function PackageReactDialogExample() {
  const document = await getSingleDocument(
    `/src/components/package/react-dialog/index.mdx`,
  );

  return <ReactDialogMdx documentData={document} />;
}

export default PackageReactDialogExample;
