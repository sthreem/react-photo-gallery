import React from 'react';
import { PicturesGridProps } from '@/types'
import GridPicture from '@/components/GridPicture'

const GalleryGrid: React.FC<PicturesGridProps> = ({ pictures }) => {
  return (
    <>
      {pictures.map((picture, index) => (
        <GridPicture key={index} picture={picture} />
      ))}
    </>
  );
};

export default GalleryGrid;