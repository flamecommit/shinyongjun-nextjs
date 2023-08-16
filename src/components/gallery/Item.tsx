'use client';

import { useState } from 'react';
import styled from 'styled-components';
import useMousePressed from '@/hooks/useMousePressed';

type Props = {
  image: string;
  scale: number;
};

function GalleryItem({ image, scale }: Props) {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [saveX, setSaveX] = useState(0);
  const [saveY, setSaveY] = useState(0);
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(0);
  const transform = `translate(${transformX}px, ${transformY}px) scale(${scale})`;
  const isMousePressed = useMousePressed();

  const mousedownGallery = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setStartY(e.clientY);
    setSaveX(transformX);
    setSaveY(transformY);
  };

  const mousemoveGallery = (e: React.MouseEvent) => {
    if (!isMousePressed) return;
    setTransformX(e.clientX - startX + saveX);
    setTransformY(e.clientY - startY + saveY);
  };

  return (
    <StyledGalleryItem
      onMouseDown={mousedownGallery}
      onMouseMove={mousemoveGallery}
      $transform={transform}
      data-pressed={isMousePressed.toString()}
    >
      <img src={image} alt="" />
    </StyledGalleryItem>
  );
}

const StyledGalleryItem = styled.div.attrs<{ $transform: string }>((props) => ({
  style: {
    transform: props.$transform,
  },
}))`
  position: absolute;
  cursor: grab;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  max-width: 100%;
  img {
    pointer-events: none;
    user-select: none;
    max-width: 100%;
  }
  &[data-pressed='true'] {
    cursor: grabbing;
  }
`;

export default GalleryItem;
