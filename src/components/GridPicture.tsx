import React, { useState } from 'react';
import { GridPictureProps } from '@/types'
import { StyledImageWrapper, StyledImage } from '@/styles/pictures'

const GridPicture: React.FC<GridPictureProps> = ({ picture }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <StyledImageWrapper aria-label="Select photo" aria-describedby={picture.description} role="button">
      <StyledImage src={picture.url} alt={picture.description} loaded={loaded} onLoad={() => setLoaded(true)} />
    </StyledImageWrapper>
  );
};

export default GridPicture;