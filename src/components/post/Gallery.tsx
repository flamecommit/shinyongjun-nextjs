'use client';

import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  images: string[];
  initActiveIndex: number;
  closeGallery: () => void;
};

function PostGallery({ images, initActiveIndex, closeGallery }: Props) {
  const [activeIndex, setActiveIndex] = useState(initActiveIndex);

  return (
    <StyledPostGallery onClick={() => closeGallery()}>
      <div className="image-list">
        {images.map((image, index) => {
          return (
            activeIndex === index && (
              <div key={image} className="image-item">
                <img src={image} alt="" />
              </div>
            )
          );
        })}
      </div>
    </StyledPostGallery>
  );
}

const StyledPostGallery = styled.div`
  backdrop-filter: blur(4px);
  position: fixed;
  inset: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.75);
  .image-list {
    position: absolute;
    inset: 0;
    .image-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
`;

export default PostGallery;
