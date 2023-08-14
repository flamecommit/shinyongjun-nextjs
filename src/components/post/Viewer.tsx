'use client';

import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Post } from '@/services/post';
import { getFormatDatetime } from '@/utils/datetime';
import { prism } from '@/styles/prism';
import { markdown } from '@/styles/markdown';
import { device } from '@/styles/mixin';
import PostGallery from './Gallery';
import CategoryItem from '../category/Item';

interface Props {
  postData: {
    seriesIndex: number | undefined;
  } & Post;
}

interface GalleryType {
  key: number;
  src: string;
}

function PostViewer({ postData }: Props) {
  const [images, setImages] = useState<GalleryType[]>([]);
  const [isGallery, setIsGallery] = useState(false);
  const [initActiveIndex, setInitActiveIndex] = useState(0);
  const postContents = useRef<HTMLDivElement>(null);

  const closeGallery = () => {
    setIsGallery(false);
  };

  useEffect(() => {
    const mdxImages = postContents.current?.getElementsByTagName('img');
    const mdxImageArray = Array.from(mdxImages || []);
    const result = mdxImageArray.map((image, index) => {
      image.addEventListener('click', () => {
        setInitActiveIndex(index);
        setIsGallery(true);
      });
      return {
        key: index,
        src: image.src,
      };
    });

    setImages(result);
  }, []);

  return (
    <>
      <StyledPostViewer>
        <header className="post-header">
          {postData.seriesIndex && (
            <div className="post-series">
              <Link href={`/series/${postData.seriesIndex}`}>
                # {postData.series}
              </Link>
            </div>
          )}

          <h1 className="post-title">{postData.title}</h1>
          <div className="post-categories">
            {postData.categories.map((category) => {
              return <CategoryItem key={category} category={category} />;
            })}
          </div>
          <div className="post-date">
            {getFormatDatetime(postData.date, 'YYYY-MM-DD')}
          </div>
        </header>
        <div className="post-content" ref={postContents}>
          <MDXRemote {...postData.mdx} />
        </div>
      </StyledPostViewer>
      {isGallery && (
        <PostGallery
          images={images}
          initActiveIndex={initActiveIndex}
          closeGallery={closeGallery}
        />
      )}
    </>
  );
}

const StyledPostViewer = styled.article`
  .post-header {
    text-align: center;
    margin-bottom: 60px;
    .post-series {
      a {
        &:hover {
          color: #1f883d;
        }
      }
    }
    .post-title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 12px;
    }
    .post-categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    .post-date {
      margin-top: 6px;
      color: #666;
    }
  }
  .post-content {
    ${markdown}
    ${prism}
    img {
      display: block;
      cursor: pointer;
      margin-inline: auto;
    }
    .image-cite {
      display: block;
      text-align: center;
      margin-top: 6px;
      color: #666;
    }
    code {
      display: inline-block;
      font-size: 14px;
      line-height: 24px;
      padding-block: 0;
    }
    .rehype-code-title {
      text-align: right;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 14px;
      text-shadow: 0 1px white;
      position: relative;
      background-color: #f6f8fa;
      border-radius: 6px;
      padding: 6px 16px;
      border-bottom: 1px solid #ddd;
    }
    ol {
      list-style: decimal;
    }
  }
  @media ${device.mobile} {
    .post-header {
      .post-title {
        font-size: 24px;
      }
      .post-date {
        font-size: 12px;
      }
      .post-categories {
        gap: 8px;
      }
    }
    .post-content {
      font-size: 14px;
      code {
        font-size: 12px;
        line-height: 21px;
      }
      .rehype-code-title {
        font-size: 12px;
      }
    }
  }
`;

export default PostViewer;
