'use client';

import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useState, useRef } from 'react';
import { Score } from '@/services/score';
import { prism } from '@/styles/prism';
import { markdown } from '@/styles/markdown';
import { device } from '@/styles/mixin';
import GalleryWrapper from '@/components/gallery/Wrapper';
import ScorePhrase from './Phrase';
import ScoreWrapper from './Wrapper';
import { GalleryType } from '../types/gallery';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { scoreActions } from '@/stores/features/score';

interface Props {
  scoreData: Score;
}

function ScoreViewer({ scoreData }: Props) {
  const [images, setImages] = useState<GalleryType[]>([]);
  const [isGallery, setIsGallery] = useState(false);
  const [initActiveIndex, setInitActiveIndex] = useState(0);
  const contents = useRef<HTMLDivElement>(null);
  const scoreState = useSelector((state: RootState) => state.score);
  const dispatch = useDispatch();

  const closeGallery = () => {
    setIsGallery(false);
  };

  const setCapo = (value: number) => {
    const temp = scoreState.capo + value;
    if (temp >= 0 && temp <= 8) {
      dispatch(scoreActions.setCapo(temp));
    }
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

  useEffect(() => {
    dispatch(scoreActions.setCapo(scoreData.capo));

    return () => {
      dispatch(scoreActions.setCapo(0));
    };
  }, []);

  return (
    <>
      <StyledScoreViewer>
        <header className="score-header">
          <h1 className="score-title">{scoreData.title}</h1>
          <div className="score-date">{scoreData.releaseYear}</div>
          <div className="score-meta">
            <div className="score-capo">
              Capo : {scoreState.capo}
              <button type="button" onClick={() => setCapo(1)}>
                key up
              </button>
              <button type="button" onClick={() => setCapo(-1)}>
                key down
              </button>
            </div>
            <div className="score-artist">{scoreData.artist}</div>
          </div>
        </header>
        <div className="score-content" ref={contents}>
          <MDXRemote
            {...scoreData.mdx}
            components={{ ScoreWrapper, ScorePhrase }}
          />
        </div>
      </StyledScoreViewer>
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

const StyledScoreViewer = styled.div`
  .score-header {
    text-align: center;
    margin-bottom: 60px;
    .score-title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 12px;
    }
    .score-categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    .score-date {
      margin-top: 12px;
      color: #666;
      font-size: 14px;
    }
    .score-meta {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .score-capo {
        display: flex;
        column-gap: 12px;
      }
    }
  }
  .score-content {
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
      font-size: 12px;
    }
    code {
      display: inline-block;
      font-size: 14px;
      line-height: 24px;
      padding-block: 0;
    }
    ol {
      list-style: decimal;
    }
    li {
      list-style: disc;
    }
  }
  @media ${device.mobile} {
    .score-header {
      .score-title {
        font-size: 24px;
      }
      .score-date {
        font-size: 12px;
      }
      .score-categories {
        gap: 8px;
      }
      .score-meta {
        font-size: 12px;
      }
    }
    .score-content {
      font-size: 14px;
      code {
        font-size: 12px;
        line-height: 21px;
      }
    }
  }
`;

export default ScoreViewer;
