'use client';

import styled from 'styled-components';
import { Datepicker } from '@shinyongjun/react-datepicker';

function PackageReactDatepickerExample() {
  return (
    <StyledPackageReactDatepickerExample>
      <section className="section">
        <header className="head">
          <h3>Default</h3>
        </header>
        <Datepicker />
      </section>
    </StyledPackageReactDatepickerExample>
  );
}

const StyledPackageReactDatepickerExample = styled.div`
  padding: 90px 50px;
  .react-datepicker__wrapper {
    font-size: 14px;
    .react-datepicker__input-container {
      width: 200px;
    }
  }
`;

export default PackageReactDatepickerExample;
