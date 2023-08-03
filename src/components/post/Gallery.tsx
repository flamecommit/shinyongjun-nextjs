'use client';

import styled from 'styled-components';

type Props = {
  images: string[];
};

function PostGallery({ images }: Props) {
  return (
    <StyledPostGallery>
      {images.map((image) => {
        return <img key={image} src={image} alt="" />;
      })}
    </StyledPostGallery>
  );
}

const StyledPostGallery = styled.div``;

export default PostGallery;
