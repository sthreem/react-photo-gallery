import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '@/store';
import { Picture, PicturesState } from '@/types';

const initialState: PicturesState = {
  status: 'idle',
  pictures: [],
  error: null,
  selectedPicture: null,
  favorites: [],
};

export const fetchPictures = createAsyncThunk('pictures/fetchPictures', async () => {
  const response = await axios.get('https://agencyanalytics-api.vercel.app/images.json');
  return response.data;
});

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    selectPicture: (state, action) => {
      state.selectedPicture = action.payload;
    },
    deletePicture: (state, action) => {
      const picture = action.payload;

      state.favorites = state.favorites.filter((fav: Picture) => fav.id !== picture.id);
      state.pictures = state.pictures.filter((pic: Picture) => pic.id !== picture.id);
    },
    addToFavorites: (state, action) => {
      const picture = action.payload;

      if (!state.favorites.find((fav: Picture) => fav.id === picture.id)) {
        state.favorites.push(picture);
      }
    },
    removeFromFavorites: (state, action) => {
      const picture = action.payload;

      state.favorites = state.favorites.filter((fav: Picture) => fav.id !== picture.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPictures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPictures.fulfilled, (state, action) => {
        state.status = 'idle';
        // Since we don't have a functionality for adding new pictures
        // it is safe to sort them once when successfully fetched
        const sortedPictures = action.payload.sort((a: Picture, b: Picture) => {
          return Date.parse(b.createdAt) - Date.parse(a.createdAt);
        });
        state.pictures = sortedPictures;
        state.favorites = sortedPictures.filter((pic: Picture) => pic.favorited);
      })
      .addCase(fetchPictures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { selectPicture, addToFavorites, removeFromFavorites } = picturesSlice.actions;

export const selectPictures = (state: RootState) => state.pictures.pictures;
export const selectFavorites = (state: RootState) => state.pictures.favorites;
export const selectPicturesStatus = (state: RootState) => state.pictures.status;
export const selectPicturesError = (state: RootState) => state.pictures.error;
export const selectSelectedPicture = (state: RootState) => state.pictures.selectedPicture;
export const selectPicturesSize = (state: RootState) => {
  // Size in B needs to be converted to MB and returned in a hash map with picture.id as key
  const pictureSize: { [key: string]: string } = {};
  state.pictures.pictures.forEach((picture) => {
    pictureSize[picture.id.toString()] = `${(picture.sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
  });
  return pictureSize;
};

export default picturesSlice.reducer;