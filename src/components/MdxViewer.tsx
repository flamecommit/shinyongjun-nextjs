import React from "react";
import { MDXProvider } from "@mdx-js/react";

interface MDXProps {
  children: React.ReactNode;
}

export default function MDXLayout({ children }: MDXProps) {
  return (
    <>
      <MDXProvider>
        <div className="markdown-body">{children}</div>
      </MDXProvider>
    </>
  );
}
