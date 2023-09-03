'use client';

import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

function ReactDatepickerSection({ children }: IProps) {
  return (
    <StyledReactDatepickerSection>{children}</StyledReactDatepickerSection>
  );
}

const StyledReactDatepickerSection = styled.section`
  margin: 50px 0;
  .react-datepicker__wrapper {
    width: 200px;
    margin-bottom: 15px;
  }
  .react-datepicker__datepicker {
    font-size: 14px;
  }
`;

export default ReactDatepickerSection;
