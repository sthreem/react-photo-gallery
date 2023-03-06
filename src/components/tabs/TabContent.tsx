import React from 'react';

import BasicPhotoElements from '@/components/photos/BasicPhotoElements';
import { useAppSelector } from '@/store';
import { selectFavorites, selectPhotos } from '@/store/photosSlice';
import { StyledTabGrid } from '@/styles/tabs';
import { TabGridProps } from '@/types';

const TabContent: React.FC<TabGridProps> = ({ index, isHidden, isFavorites }) => {
  const selectTarget = isFavorites ? selectFavorites : selectPhotos;
  const photos = useAppSelector(selectTarget);

  return (
    <section
      hidden={isHidden}
      aria-hidden={isHidden}
      data-testid={`tab-content-${index}`}
    >
      {/* Inner tab grid */}
      <StyledTabGrid
        role="tabpanel"
        id={`tab-content-${index}`}
        aria-labelledby={`navigation-button-${index}`}
        tabIndex={index}
      >
        {photos.map((photo, index) => (
          // Individual photos
          <BasicPhotoElements
            key={index}
            photo={photo}
            isInGrid={true}
            role="listitem"
            aria-label="Photo from gallery"
            data-testid={`photo-thumbnail-${index}`}
          />
        ))}
      </StyledTabGrid>
    </section>
  );
};

export default TabContent;
