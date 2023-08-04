'use client';

import { useState } from 'react';
import styled from 'styled-components';
import useMousePressed from '@/libs/hooks/useMousePressed';

type Props = {
  image: string;
  scale: number;
};

function PostGalleryItem({ image, scale }: Props) {
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
    <StyledPostGalleryItem
      onMouseDown={mousedownGallery}
      onMouseMove={mousemoveGallery}
      $transform={transform}
      data-pressed={isMousePressed.toString()}
    >
      <img src={image} alt="" />
    </StyledPostGalleryItem>
  );
}

const StyledPostGalleryItem = styled.div.attrs<{ $transform: string }>(
  (props) => ({
    style: {
      transform: props.$transform,
    },
  }),
)`
  cursor: grab;
  img {
    pointer-events: none;
    user-select: none;
  }
  &[data-pressed='true'] {
    border: 2px dashed #fff;
    cursor: grabbing;
  }
`;

export default PostGalleryItem;
