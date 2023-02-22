import React from "react";
import GalleryTabs from '@/components/GalleryTabs'
import { GalleryContainer } from '@/styles/layout'
import { GalleryHeader } from '@/styles/texts'

const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <GalleryHeader>
        Photos
      </GalleryHeader>
      <GalleryTabs />
    </GalleryContainer>
  );
};

export default Gallery;