"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Gnb() {
  return (
    <GnbLayout className="gnb">
      <Link href="/">홈</Link>
      <Link href="/blog">블로그</Link>
    </GnbLayout>
  );
}

const GnbLayout = styled.nav`
  display: flex;
  column-gap: 10px;
  padding: 10px;
  a {
    font-size: 24px;
  }
`;
