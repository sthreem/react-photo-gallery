import React, { useState } from 'react'
import { GridPhotoProps } from '@/types'
import { PhotoFigure, PhotoWrapper, PhotoImage, PhotoCaption } from '@/styles/photos'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/store'
import { selectPhoto, unselectPhoto, selectPhotoSize, selectSelectedPhoto } from '@/store/photosSlice'

const PhotoElements: React.FC<GridPhotoProps> = ({ photo, isInGrid }) => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const dispatch = useDispatch()
  const photoSize = useAppSelector(selectPhotoSize)
  const selectedPhoto = useAppSelector(selectSelectedPhoto)
  const isVertical = photo ? photo.dimensions.height > photo.dimensions.width : false

  const handleSelectPhoto = () => {
    isInGrid
      ? selectedPhoto?.id === photo.id
        ? dispatch(unselectPhoto())
        : dispatch(selectPhoto(photo))
      : null
  }

  const photoFigureClasses = [
    isInGrid ? 'photo-in-grid' : ''
  ].join(' ')

  const photoWrapperClasses = [
    'photo-wrapper',
    isInGrid ? 'photo-in-grid' : '',
    (photo.id === selectedPhoto?.id) ? 'is-active-photo' : ''
  ].join(' ')

  const photoClasses = [
    'photo',
    isInGrid ? 'photo-in-grid' : '',
  ].join(' ')

  const photoCaptionClasses = [
    'photo-caption',
    'body-semibold-dark',
    isInGrid ? 'photo-in-grid' : '',
  ].join(' ')

  return (
    <PhotoFigure className={photoFigureClasses}>
      <PhotoWrapper
        className={photoWrapperClasses}
        onClick={handleSelectPhoto}
        role="listitem"
        loaded={loaded}
        aria-selected={photo.id === selectedPhoto?.id ? 'true' : 'false'}
        aria-label="Photo from gallery" >
        <PhotoImage
          src={photo.url}
          className={photoClasses}
          alt={photo.description}
          loaded={loaded}
          isVertical={isVertical}
          onLoad={() => setLoaded(true)} />
      </PhotoWrapper>
      <PhotoCaption
        className={photoCaptionClasses}>
        {photo.filename}
      </PhotoCaption>
      <p
        className='photo-info body'>
        {photoSize[photo.id]}
      </p>
    </PhotoFigure>
  )
}

export default PhotoElements