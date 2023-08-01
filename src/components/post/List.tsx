"use client";

import Link from "next/link";
import styled from "styled-components";
import { Post } from "@/libs/post";
import { getFormatDatetime } from "@/libs/utils/time";
import { config } from "@/styles/config";

const PostList = ({ postList }: { postList: Post[] }) => {
  return (
    <StyledPostList className="gnb">
      {postList.map((post) => {
        return (
          <div key={post.slug} className="post-item">
            <Link href={`/post/${post.slug}`} className="title">
              {post.title}
            </Link>
            <div className="date">
              {getFormatDatetime(post.date, "YYYY-MM-DD")}
            </div>
            <div className="tags">
              {post.tags.map((tag) => {
                return (
                  <Link href={`/tag/${tag}`} className="tag" key={tag}>
                    {tag}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </StyledPostList>
  );
};

const StyledPostList = styled.div`
  display: grid;
  row-gap: 36px;
  .post-item {
    padding: 20px;
    border: 1px solid #000;
    .title {
      font-weight: 500;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
        color: ${config.forestGreen};
      }
    }
    .date {
      font-size: 13px;
      margin-top: 6px;
      color: #666;
    }
    .tags {
      display: flex;
      column-gap: 12px;
      margin-top: 6px;
      .tag {
        padding: 6px;
        border: solid #000;
        border: 1px solid #000;
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
`;

export default PostList;
