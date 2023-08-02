"use client";

import { Post } from "@/libs/post";
import styled from "styled-components";
import { MDXRemote } from "next-mdx-remote";
import PageTitle from "../page/Title";
import { getFormatDatetime } from "@/libs/utils/time";

interface Props {
  postData: Post;
}

const PostViewer = ({ postData }: Props) => {
  return (
    <StyledPostViewer>
      <div className="post-header">
        <h2 className="post-title">{postData.title}</h2>
        <div className="post-date">
          {getFormatDatetime(postData.date, "YYYY-MM-DD")}
        </div>
      </div>
      <MDXRemote {...postData.mdx} />
    </StyledPostViewer>
  );
};

const StyledPostViewer = styled.article`
  .post-header {
    margin-bottom: 24px;
    .post-title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 12px;
    }
    .post-date {
      margin-top: 6px;
      color: #666;
    }
  }
`;

export default PostViewer;
