import React from "react";
import GalleryTabs from '@/components/GalleryTabs'
import { GalleryContainer } from '@/styles/layout'
import { GalleryHeading } from '@/styles/texts'

const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <GalleryHeading>
        Photos
      </GalleryHeading>
      <GalleryTabs />
    </GalleryContainer>
  );
};

export default Gallery;