import React from 'react'
import { TabGridProps } from '@/types'
import PhotoElements from '@/components/PhotoElements'
import { TabGrid } from '@/styles/tabs'
import { useAppSelector } from '@/store'
import { selectPhotos, selectFavorites } from '@/store/photosSlice'

const TabContent: React.FC<TabGridProps> = ({ index, isHidden, isFavorites }) => {
  const selectTarget = isFavorites ? selectFavorites : selectPhotos
  const photos = useAppSelector(selectTarget)

  return (
    <section
      id={`tab-content-${index}`}
      role="tabpanel"
      hidden={isHidden} >
      <TabGrid
        role="list">
        {photos.map((photo, index) => (
          <PhotoElements
            key={index}
            photo={photo}
            isInGrid={true} />
        ))}
      </TabGrid>
    </section>
  )
}

export default TabContent