"use client";

import MDXLayout from "@/components/MdxViewer";
import Content from "/posts/test-mdx-posts-1/index.mdx";

export default function Post() {
  console.log(require("/posts/test-mdx-posts-1/index.mdx"));

  return (
    <MDXLayout>
      <Content />
    </MDXLayout>
  );
}
