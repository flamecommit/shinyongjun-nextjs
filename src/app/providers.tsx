"use client";

import { PropsWithChildren } from "react";
import { ResetStyle } from "@/styles/reset";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ResetStyle />
      {children}
    </>
  );
}
