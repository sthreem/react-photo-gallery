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
        state.pictures = action.payload;
        state.favorites = action.payload.filter((pic: Picture) => pic.favorited);
      })
      .addCase(fetchPictures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { selectPicture, addToFavorites, removeFromFavorites } = picturesSlice.actions;

export const selectPictures = (state: RootState) => state.pictures.pictures;
export const selectPicturesStatus = (state: RootState) => state.pictures.status;
export const selectPicturesError = (state: RootState) => state.pictures.error;
export const selectSelectedPicture = (state: RootState) => state.pictures.selectedPicture;

export default picturesSlice.reducer;