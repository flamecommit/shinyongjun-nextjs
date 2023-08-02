"use client";

import { Post } from "@/libs/post";
import styled from "styled-components";
import { MDXRemote } from "next-mdx-remote";

interface Props {
  postData: Post;
}

const PostViewer = ({ postData }: Props) => {
  return (
    <StyledPostViewer>
      <div className="post-header">
        <h1>{postData.title}</h1>
      </div>
      <MDXRemote {...postData.mdx} />
    </StyledPostViewer>
  );
};

const StyledPostViewer = styled.article``;

export default PostViewer;
