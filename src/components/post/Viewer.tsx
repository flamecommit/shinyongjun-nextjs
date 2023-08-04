'use client';

import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useRef, useState } from 'react';
import { Post } from '@/libs/post';
import { getFormatDatetime } from '@/libs/utils/time';
import { prism } from '@/styles/prism';
import { markdown } from '@/styles/markdown';
import PostGallery from './Gallery';

interface Props {
  postData: Post;
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
