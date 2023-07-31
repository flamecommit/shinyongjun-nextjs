"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function MdxViewer(mdx: MDXRemoteSerializeResult) {
  return (
    <div>
      <MDXRemote {...mdx} />
    </div>
  );
}
