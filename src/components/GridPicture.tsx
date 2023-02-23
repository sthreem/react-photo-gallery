import React, { useState } from 'react';
import { GridPictureProps } from '@/types'
import { GridPictureWrapper, StyledImageWrapper, StyledImage } from '@/styles/pictures'
import { PictureName } from '@/styles/texts'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store';
import { selectPicture, selectPicturesSize } from '@/store/picturesSlice';

const GridPicture: React.FC<GridPictureProps> = ({ picture }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const pictureSize = useAppSelector(selectPicturesSize);

  const handleSelectPicture = () => {
    dispatch(selectPicture(picture));
  };

  return (
    <GridPictureWrapper>
      <StyledImageWrapper aria-label="Select photo" aria-describedby={picture.description} role="button" onClick={handleSelectPicture}>
        <StyledImage src={picture.url} alt={picture.description} loaded={loaded} onLoad={() => setLoaded(true)} />
      </StyledImageWrapper>
      <PictureName className="body-semibold-dark">{picture.filename}</PictureName>
      <p className='body'>{pictureSize[picture.id]}</p>
    </GridPictureWrapper>
  );
};

export default GridPicture;