import { getSingleDocument } from '@/services/mdx';
import '@shinyongjun/react-datepicker/css';
import ReactDatepickerMdx from './Mdx';

async function PackageReactDatepickerExample() {
  const document = await getSingleDocument(
    `/src/components/package/react-datepicker/index.mdx`,
  );

  return <ReactDatepickerMdx documentData={document} />;
}

export default PackageReactDatepickerExample;
