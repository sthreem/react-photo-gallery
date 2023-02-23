import React from "react";
import GalleryTabs from '@/components/GalleryTabs'
import { GalleryContainer } from '@/styles/layout'
import { MainHeading } from '@/styles/texts'

const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <MainHeading>
        Photos
      </MainHeading>
      <GalleryTabs />
    </GalleryContainer>
  );
};

export default Gallery;