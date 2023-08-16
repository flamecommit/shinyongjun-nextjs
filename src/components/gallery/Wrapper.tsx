'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FiChevronLeft } from '@react-icons/all-files/fi/FiChevronLeft';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';
import { CSSTransition } from 'react-transition-group';
import GalleryItem from '@/components/gallery/Item';

interface GalleryType {
  key: number;
  src: string;
}

interface Props {
  images: GalleryType[];
  initActiveIndex: number;
  closeGallery: () => void;
}

function GalleryWrapper({ images, initActiveIndex, closeGallery }: Props) {
  const maxScale = 10;
  const minScale = 0.3;
  const [activeIndex, setActiveIndex] = useState(initActiveIndex);
  const [scale, setScale] = useState(1);
  const imageCount = images.length;
  const thumbnails = useRef<HTMLDivElement>(null);

  const clickBackground = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      closeGallery();
    }
  };

  const moveToActiveIndex = (index: number) => {
    setScale(1);
    if (index > imageCount - 1) return setActiveIndex(0);
    if (index < 0) return setActiveIndex(imageCount - 1);
    return setActiveIndex(index);
  };

  const zoomGalleryImage = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      if (scale * 1.05 > maxScale) {
        setScale(maxScale);
      } else {
        setScale(scale * 1.05);
      }
    }
    if (e.deltaY > 0) {
      if (scale * 0.95 < minScale) {
        setScale(minScale);
      } else {
        setScale(scale * 0.95);
      }
    }
  };

  useEffect(() => {
    thumbnails.current
      ?.getElementsByTagName('button')
      [activeIndex].scrollIntoView();
  }, [activeIndex]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);

  return (
    <StyledGalleryWrapper onWheel={zoomGalleryImage} $scale={scale}>
      <button type="button" className="image-list" onClick={clickBackground}>
        {images.map((image, index) => {
          return (
            <CSSTransition
              in={activeIndex === index}
              key={image.key}
              timeout={300}
              unmountOnExit
              classNames="galleryItem"
            >
              <GalleryItem image={image.src} scale={scale} />
            </CSSTransition>
          );
        })}
      </button>
      <nav className="controller">
        <button
          type="button"
          className="btn-prev"
          onClick={() => moveToActiveIndex(activeIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="btn-next"
          onClick={() => moveToActiveIndex(activeIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </nav>
      <div className="thumbnails" ref={thumbnails}>
        <div className="center">
          {images.map((image, index) => {
            return (
              <button
                type="button"
                key={image.key}
                className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
                onClick={() => moveToActiveIndex(index)}
              >
                <img src={image.src} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </StyledGalleryWrapper>
  );
}

const StyledGalleryWrapper = styled.div<{ $scale: number }>`
  backdrop-filter: blur(5px);
  position: fixed;
  inset: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.7);
  .image-list {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    .image-item {
      cursor: grab;
      transform: ${(props) => `scale(${props.$scale})`};
    }
    .galleryItem-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    .galleryItem-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition:
        opacity 300ms,
        transform 300ms;
    }
    .galleryItem-exit {
      opacity: 1;
    }
    .galleryItem-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition:
        opacity 300ms,
        transform 300ms;
    }
  }
  .controller {
    position: absolute;
    right: 0;
    bottom: 80px;
    left: 0%;
    display: flex;
    justify-content: center;
    button {
      line-height: 1;
      svg {
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .thumbnails {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: auto;
    overflow-y: hidden;
    text-align: center;
    .center {
      display: inline-block;
      white-space: nowrap;
    }
    .thumbnail {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: top;
      width: 50px;
      height: 50px;
      background: #fff;
      opacity: 0.5;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      &.active {
        opacity: 1;
      }
    }
  }
`;

export default GalleryWrapper;
