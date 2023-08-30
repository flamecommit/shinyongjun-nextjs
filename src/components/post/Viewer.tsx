'use client';

import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getFormatDatetime } from '@/utils/datetime';
import { device } from '@/styles/mixin';
import GalleryWrapper from '@/components/gallery/Wrapper';
import CategoryItem from '../category/Item';
import { config } from '@/styles/config';
import { IPost } from '@/types/post';
import { TGallery } from '@/types/gallery';
import MdxContents from '../mdx/Contents';
import PostOutlink from './Outlink';

interface Props {
  postData: {
    seriesIndex: number | undefined;
  } & IPost;
}

function PostViewer({ postData }: Props) {
  const [images, setImages] = useState<TGallery[]>([]);
  const [isGallery, setIsGallery] = useState(false);
  const [initActiveIndex, setInitActiveIndex] = useState(0);
  const contents = useRef<HTMLDivElement>(null);

  const closeGallery = () => {
    setIsGallery(false);
  };

  useEffect(() => {
    const mdxImages = contents.current?.getElementsByTagName('img');
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
              return (
                <CategoryItem key={category} category={category} board="post" />
              );
            })}
          </div>
          <div className="post-date">
            {getFormatDatetime(postData.date, 'YYYY-MM-DD')}
          </div>
        </header>
        <div className="post-content" ref={contents}>
          <MdxContents>
            <MDXRemote
              {...postData.mdx}
              components={{
                PostOutlink,
              }}
            />
          </MdxContents>
        </div>
      </StyledPostViewer>
      {isGallery && (
        <GalleryWrapper
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
      color: ${config.secondaryText};
      a {
        &:hover {
          text-decoration: underline;
          color: ${config.hoverText};
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
      margin-top: 12px;
      color: ${config.secondaryText};
      font-size: 14px;
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
  }
`;

export default PostViewer;
