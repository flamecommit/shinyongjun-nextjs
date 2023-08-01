"use client";

import styled from "styled-components";
import TheGnb from "@/components/the/Gnb";

const TheHeader = () => {
  return (
    <StyledTheHeader>
      <TheGnb />
    </StyledTheHeader>
  );
};

const StyledTheHeader = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  border-bottom: 1px solid #000;
`;

export default TheHeader;
