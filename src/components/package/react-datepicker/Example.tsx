import { getSingleDocument } from '@/services/mdx';
import ReactDatepickerMdx from './Mdx';

async function PackageReactDatepickerExample() {
  const document = await getSingleDocument(
    `/contents/example/react-datepicker/index.mdx`,
  );

  console.log(document);

  return (
    <>
      <ReactDatepickerMdx documentData={document} />
    </>
  );
}

export default PackageReactDatepickerExample;
