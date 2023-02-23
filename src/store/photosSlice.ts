import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '@/store';
import { Photo, PhotosState } from '@/types';

const initialState: PhotosState = {
  status: 'idle',
  photos: [],
  error: null,
  selectedPhoto: null,
  favorites: [],
};

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  const response = await axios.get('https://agencyanalytics-api.vercel.app/images.json');
  return response.data;
});

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    selectPhoto: (state, action) => {
      state.selectedPhoto = action.payload;
    },
    deletePhoto: (state, action) => {
      const photo = action.payload;

      state.favorites = state.favorites.filter((fav: Photo) => fav.id !== photo.id);
      state.photos = state.photos.filter((pic: Photo) => pic.id !== photo.id);
    },
    addToFavorites: (state, action) => {
      const photo = action.payload;

      if (!state.favorites.find((fav: Photo) => fav.id === photo.id)) {
        state.favorites.push(photo);
      }
    },
    removeFromFavorites: (state, action) => {
      const photo = action.payload;

      state.favorites = state.favorites.filter((fav: Photo) => fav.id !== photo.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'idle';
        // Since we don't have a functionality for adding new photos
        // it is safe to sort them once when successfully fetched
        const sortedPhotos = action.payload.sort((a: Photo, b: Photo) => {
          return Date.parse(b.createdAt) - Date.parse(a.createdAt);
        });
        state.photos = sortedPhotos;
        state.favorites = sortedPhotos.filter((pic: Photo) => pic.favorited);
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { selectPhoto, addToFavorites, removeFromFavorites } = photosSlice.actions;

export const selectPhotos = (state: RootState) => state.photos.photos;
export const selectFavorites = (state: RootState) => state.photos.favorites;
export const selectPhotosStatus = (state: RootState) => state.photos.status;
export const selectPhotosError = (state: RootState) => state.photos.error;
export const selectSelectedPhoto = (state: RootState) => state.photos.selectedPhoto;
export const selectPhotoSize = (state: RootState) => {
  // Size in B needs to be converted to MB and returned in a hash map with photo.id as key
  const photoSize: { [key: string]: string } = {};
  state.photos.photos.forEach((photo) => {
    photoSize[photo.id.toString()] = `${(photo.sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
  });
  return photoSize;
};

export default photosSlice.reducer;