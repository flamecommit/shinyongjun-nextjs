"use client";

import styled from "styled-components";
import StyledComponentsRegistry from "@/libs/registry";
import { ResetStyle } from "@/styles/reset";
import TheContainer from "@/components/the/Container";
import TheHeader from "@/components/the/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <title>Shinyongjun.com</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <ResetStyle />
          <StyledRootLayout>
            <TheHeader />
            <TheContainer>{children}</TheContainer>
          </StyledRootLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

const StyledRootLayout = styled.div`
  // min-width: 1280px;
`;

export default RootLayout;
