import React from 'react';
import { TabGridProps } from '@/types';
import GridPhoto from '@/components/GridPhoto';
import { TabGrid } from "@/styles/tabs";
import { useAppSelector } from '@/store';
import { selectPhotos, selectFavorites } from '@/store/photosSlice';

const TabContent: React.FC<TabGridProps> = ({ index, isHidden, isFavorites }) => {
  const selectTarget = isFavorites ? selectFavorites : selectPhotos
  const photos = useAppSelector(selectTarget);

  return (
    <section
      id={`tab-content-${index}`}
      role="tabpanel"
      hidden={isHidden} >
      <TabGrid
        role="list">
        {photos.map((photo, index) => (
          <GridPhoto
            key={index}
            photo={photo} />
        ))}
      </TabGrid>
    </section>
  );
};

export default TabContent;