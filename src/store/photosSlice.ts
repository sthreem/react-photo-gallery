import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '@/store'
import { Photo, PhotosState } from '@/types'
import helpers from '@/utilities/helpers'
import { PHOTOS_ENDPOINT } from '@/utilities/constants'

const initialState: PhotosState = {
  status: 'idle',
  photos: [],
  error: null,
  selectedPhoto: null,
  favorites: [],
}

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  const response = await axios.get(PHOTOS_ENDPOINT)
  return response.data
})

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    selectPhoto: (state, action) => {
      state.selectedPhoto = action.payload
    },
    unselectPhoto: (state) => {
      state.selectedPhoto = null
    },
    deletePhoto: (state, action) => {
      const photo = action.payload

      state.favorites = state.favorites.filter((fav: Photo) => fav.id !== photo.id)
      state.photos = state.photos.filter((pic: Photo) => pic.id !== photo.id)
      state.selectedPhoto = null
    },
    addToFavorites: (state, action) => {
      const photo = action.payload

      if (!state.favorites.find((fav: Photo) => fav.id === photo.id)) {
        state.favorites.push(photo)
      }
    },
    removeFromFavorites: (state, action) => {
      const photo = action.payload

      state.favorites = state.favorites.filter((fav: Photo) => fav.id !== photo.id)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'idle'
        state.photos = action.payload
        state.favorites = action.payload.filter((pic: Photo) => pic.favorited)
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
  },
})

export const { selectPhoto, unselectPhoto, deletePhoto, addToFavorites, removeFromFavorites } = photosSlice.actions

export const selectPhotos = (state: RootState) => helpers.sortByCreatedAt([...state.photos.photos])
export const selectFavorites = (state: RootState) => helpers.sortByCreatedAt([...state.photos.favorites])
export const selectPhotosStatus = (state: RootState) => state.photos.status
export const selectPhotosError = (state: RootState) => state.photos.error
export const selectSelectedPhoto = (state: RootState) => state.photos.selectedPhoto
export const selectPhotoSize = (state: RootState) => helpers.convertPhotoSize(state.photos.photos)
export const selectIsPhotoInFavorites = (photoId: string) => (state: RootState) =>
  state.photos.favorites.some((photo) => photo.id === photoId)
export const selectInfoToDisplay = (state: RootState) => helpers.extractInfoToDisplay(state.photos.selectedPhoto)

export default photosSlice.reducer