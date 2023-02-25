import React from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '@/store'
import {
  deletePhoto,
  selectSelectedPhoto,
  selectInfoToDisplay,
} from '@/store/photosSlice'
import {
  DetailsWrapper,
  PhotoInfos,
  DeleteButton,
} from '@/styles/photos'
import { PhotoInfoHeading, PhotoInfoRow } from '@/styles/texts'
import PhotoElements from '@/components/PhotoElements'


const PhotoDetails: React.FC = () => {
  const dispatch = useDispatch()
  const selectedPhoto = useAppSelector(selectSelectedPhoto)
  const infoToDisplay = useAppSelector(selectInfoToDisplay)

  const handleDeletePhoto = () => {
    dispatch(deletePhoto(selectedPhoto))
  }

  return (
    <DetailsWrapper
      className={selectedPhoto ? 'selected-photo' : ''}>
      {!selectedPhoto && (
        <h2 className='light'>
          Select a photo to see details
        </h2>
      )}
      {selectedPhoto && (
        <>
          <PhotoElements
            photo={selectedPhoto}
            isInGrid={false} />
          <PhotoInfos>
            <PhotoInfoHeading
              className='dark' >
              Information
            </PhotoInfoHeading>
            {infoToDisplay.map(info =>
              <PhotoInfoRow key={info.key} className='bold'>
                <span className='light semibold'>{`${info.key}`}</span>
                <span>{`${info.value}`}</span>
              </PhotoInfoRow>)}
            {selectedPhoto.description &&
              <>
                <PhotoInfoHeading
                  className='dark'>
                  Description
                </PhotoInfoHeading>
                <p className='light semibold'>
                  {selectedPhoto.description}
                </p>
              </>}
            <DeleteButton
              onClick={handleDeletePhoto}
              className='bold'
              aria-label="Delete photo">
              Delete
            </DeleteButton>
          </PhotoInfos>
        </>
      )}
    </DetailsWrapper>
  )
}

export default PhotoDetails