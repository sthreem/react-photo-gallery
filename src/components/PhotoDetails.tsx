import React from 'react'
import { useAppSelector } from '@/store'
import { selectSelectedPhoto } from '@/store/photosSlice'
import { DetailsWrapper } from '@/styles/photos'
import PhotoElements from '@/components/PhotoElements'

const PhotoDetails: React.FC = () => {
  const selectedPhoto = useAppSelector(selectSelectedPhoto)

  return (
    <DetailsWrapper
      className={selectedPhoto ? 'selected-photo' : ''}>
      {!selectedPhoto && <h2>Select a photo to see details</h2>}
      {selectedPhoto && (
        <PhotoElements
          photo={selectedPhoto}
          isInGrid={false} />
      )}
    </DetailsWrapper>
  )
}

export default PhotoDetails