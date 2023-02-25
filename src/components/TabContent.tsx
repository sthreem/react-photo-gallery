import React from 'react';

import PhotoElements from '@/components/PhotoElements';
import { useAppSelector } from '@/store';
import { selectFavorites, selectPhotos } from '@/store/photosSlice';
import { TabGrid } from '@/styles/tabs';
import { TabGridProps } from '@/types';

const TabContent: React.FC<TabGridProps> = ({ index, isHidden, isFavorites }) => {
  const selectTarget = isFavorites ? selectFavorites : selectPhotos;
  const photos = useAppSelector(selectTarget);

  return (
    <section id={`tab-content-${index}`} role="tabpanel" hidden={isHidden}>
      <TabGrid role="list">
        {photos.map((photo, index) => (
          <PhotoElements key={index} photo={photo} isInGrid={true} />
        ))}
      </TabGrid>
    </section>
  );
};

export default TabContent;
