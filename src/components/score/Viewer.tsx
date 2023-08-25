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
import { scoreActions } from '@/stores/features/score';
import { FiChevronUp } from '@react-icons/all-files/fi/FichevronUp';
import { FiChevronDown } from '@react-icons/all-files/fi/FichevronDown';
import { config } from '@/styles/config';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import Link from 'next/link';
import { FiArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft';
import { TGallery } from '@/types/gallery';

interface Props {
  scoreData: Score;
}

function ScoreViewer({ scoreData }: Props) {
  const [images, setImages] = useState<TGallery[]>([]);
  const [isGallery, setIsGallery] = useState(false);
  const [initActiveIndex, setInitActiveIndex] = useState(0);
  const contents = useRef<HTMLDivElement>(null);
  const scoreState = useAppSelector((state) => state.score);
  const dispatch = useAppDispatch();
  const computedKey = scoreData.computedKey || 0;

  const closeGallery = () => {
    setIsGallery(false);
  };

  const setCapo = (value: number) => {
    const temp = scoreState.capo + value;
    if (temp >= -8 && temp <= 8) {
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
    dispatch(scoreActions.setComputedKey(computedKey));

    return () => {
      dispatch(scoreActions.setCapo(0));
      dispatch(scoreActions.setComputedKey(0));
    };
  }, []);

  return (
    <>
      <StyledScoreViewer>
        <div className="back-link">
          <Link href="/score">
            <FiArrowLeft />
            목록으로
          </Link>
        </div>
        <header className="score-header">
          <h1 className="score-title">{scoreData.title}</h1>
          <div className="score-date">{scoreData.releaseYear}</div>
          <div className="score-meta">
            <div className="score-capo">
              Capo : {scoreState.capo}
              <div className="controller">
                <button type="button" onClick={() => setCapo(-1)}>
                  <FiChevronDown />
                </button>
                <button type="button" onClick={() => setCapo(1)}>
                  <FiChevronUp />
                </button>
              </div>
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
        <div className="back-link">
          <Link href="/score">
            <FiArrowLeft />
            목록으로
          </Link>
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
        align-items: center;
        column-gap: 12px;
        .controller {
          display: flex;
          align-items: center;
          column-gap: 6px;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background-color: ${config.primaryBg};
            border: 1px solid ${config.primaryLine};
            &:hover {
              background-color: ${config.secondaryBg};
              background-color: ${config.secondaryLine};
            }
          }
        }
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
  .score-navigation {
    margin-top: 30px;
  }
  .back-link {
    &:first-child {
      margin-bottom: 30px;
    }
    &:last-child {
      margin-top: 60px;
    }
    a {
      display: inline-flex;
      align-items: center;
      column-gap: 4px;
      &:hover {
        color: ${config.hoverText};
        text-decoration: underline;
        svg {
          transform: translateX(-3px);
        }
      }
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
    .back-link {
      &:first-child {
        margin-bottom: 12px;
      }
      &:last-child {
        margin-top: 48px;
      }
    }
  }
`;

export default ScoreViewer;
