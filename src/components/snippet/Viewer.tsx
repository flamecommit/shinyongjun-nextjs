'use client';

import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useRef, useState } from 'react';
import { getFormatDatetime } from '@/utils/datetime';
import { device } from '@/styles/mixin';
import GalleryWrapper from '@/components/gallery/Wrapper';
import CategoryItem from '../category/Item';
import { config } from '@/styles/config';
import { ISnippet } from '@/types/snippet';
import { TGallery } from '@/types/gallery';
import Link from 'next/link';
import MdxContents from '../mdx/Contents';

interface Props {
  snippetData: ISnippet;
}

function SnippetViewer({ snippetData }: Props) {
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
      <StyledSnippetViewer>
        <header className="snippet-header">
          <h1 className="snippet-title">{snippetData.title}</h1>
          <div className="snippet-categories">
            {snippetData.categories.map((category) => {
              return (
                <CategoryItem
                  key={category}
                  category={category}
                  board="snippet"
                />
              );
            })}
          </div>
          <div className="snippet-date">
            {getFormatDatetime(snippetData.date, 'YYYY-MM-DD')}
          </div>
        </header>
        <div className="snippet-content" ref={contents}>
          <MdxContents>
            <MDXRemote {...snippetData.mdx} components={{ Link }} />
          </MdxContents>
        </div>
      </StyledSnippetViewer>
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

const StyledSnippetViewer = styled.article`
  .snippet-header {
    text-align: center;
    margin-bottom: 60px;
    .snippet-series {
      color: ${config.secondaryText};
      a {
        &:hover {
          text-decoration: underline;
          color: ${config.hoverText};
        }
      }
    }
    .snippet-title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 12px;
    }
    .snippet-categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    .snippet-date {
      margin-top: 12px;
      color: ${config.secondaryText};
      font-size: 14px;
    }
  }
  @media ${device.mobile} {
    .snippet-header {
      .snippet-title {
        font-size: 24px;
      }
      .snippet-date {
        font-size: 12px;
      }
      .snippet-categories {
        gap: 8px;
      }
    }
  }
`;

export default SnippetViewer;
