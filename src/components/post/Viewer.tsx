'use client';

import styled, { css } from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Post } from '@/libs/post';
import { getFormatDatetime } from '@/libs/utils/time';
import { prism } from '@/styles/prism';
import { markdown } from '@/styles/markdown';
import PostGallery from './Gallery';

interface Props {
  postData: Post;
}

function PostViewer({ postData }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [isGallery, setIsGallery] = useState(false);
  const [initActiveIndex, setInitActiveIndex] = useState(0);
  const postContents = useRef<HTMLDivElement>(null);

  const toggleGallery = useCallback(() => {
    setIsGallery(!isGallery);
  }, [isGallery]);

  useEffect(() => {
    const mdxImages = postContents.current?.getElementsByTagName('img');
    const mdxImageArray = Array.from(mdxImages || []);
    const result = mdxImageArray.map((image, index) => {
      setInitActiveIndex(index);
      image.addEventListener('click', toggleGallery);
      return image.src;
    });

    setImages(result);

    return () => {
      mdxImageArray.map((image) => {
        image.removeEventListener('click', toggleGallery);
        return image.src;
      });
    };
  }, [toggleGallery]);

  return (
    <>
      <StyledPostViewer isGallery={isGallery}>
        <header className="post-header">
          <h1 className="post-title">{postData.title}</h1>
          <div className="post-date">
            {getFormatDatetime(postData.date, 'YYYY-MM-DD')}
          </div>
        </header>
        <div className="post-content" ref={postContents}>
          <MDXRemote {...postData.mdx} />
        </div>
      </StyledPostViewer>
      {isGallery && (
        <PostGallery images={images} initActiveIndex={initActiveIndex} />
      )}
    </>
  );
}

const StyledPostViewer = styled.article<{ isGallery: boolean }>`
  filter: ${(props) => (props.isGallery ? 'blur(4px)' : 'blur(0px)')};
  .post-header {
    text-align: center;
    padding-block: 60px;
    .post-title {
      font-weight: 700;
      font-size: 48px;
      margin-bottom: 12px;
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
      cursor: pointer;
    }
  }
`;

export default PostViewer;
