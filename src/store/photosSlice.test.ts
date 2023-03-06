import axios from 'axios';

import { mockInitialState, mockPhoto } from '@/test-utils/mocks';
import { PhotosState } from '@/types';

import photosSlice, {
  addToFavorites,
  deletePhoto,
  fetchPhotos,
  removeFromFavorites,
  selectFavorites,
  selectInfoToDisplay,
  selectIsPhotoInFavorites,
  selectPhoto,
  selectPhotos,
  selectPhotosError,
  selectPhotoSize,
  selectPhotosStatus,
  selectSelectedPhoto,
  unselectPhoto,
} from './photosSlice';

describe('photosSlice', () => {
  describe('reducers', () => {
    const initialState: PhotosState = {
      status: 'idle',
      photos: [],
      error: null,
      selectedPhoto: null,
      favorites: [],
    };

    it('should handle selectPhoto', () => {
      const photo = { ...mockPhoto, favorited: true };
      const action = selectPhoto(photo);
      const state = photosSlice(initialState, action);
      expect(state.selectedPhoto).toEqual(photo);
    });

    it('should handle unselectPhoto', () => {
      const action = unselectPhoto();
      const state = photosSlice(initialState, action);
      expect(state.selectedPhoto).toBeNull();
    });

    it('should handle deletePhoto', () => {
      const photo = { ...mockPhoto, favorited: true };
      const stateWithPhotos: PhotosState = {
        status: 'idle',
        photos: [photo],
        error: null,
        selectedPhoto: photo,
        favorites: [photo],
      };
      const action = deletePhoto(photo);
      const state = photosSlice(stateWithPhotos, action);
      expect(state.photos.length).toBe(0);
      expect(state.favorites.length).toBe(0);
      expect(state.selectedPhoto).toBeNull();
    });

    it('should handle addToFavorites', () => {
      const photo = { ...mockPhoto, favorited: false };
      const action = addToFavorites(photo);
      const state = photosSlice(initialState, action);
      expect(state.favorites.length).toBe(1);
      expect(state.favorites[0]).toEqual(photo);
    });

    it('should handle removeFromFavorites', () => {
      const photo = { ...mockPhoto, favorited: true };
      const stateWithFavorites: PhotosState = {
        status: 'idle',
        photos: [photo],
        error: null,
        selectedPhoto: null,
        favorites: [photo],
      };
      const action = removeFromFavorites(photo);
      const state = photosSlice(stateWithFavorites, action);
      expect(state.favorites.length).toBe(0);
    });
  });

  describe('selectors', () => {
    const photo1 = {
      ...mockPhoto,
      id: '1',
      url: 'https://test.com/1',
      createdAt: '2022-01-01',
      favorited: true,
    };
    const photo2 = {
      ...mockPhoto,
      id: '2',
      url: 'https://test.com/2',
      createdAt: '2022-01-02',
      favorited: false,
    };
    const photo3 = {
      ...mockPhoto,
      id: '3',
      url: 'https://test.com/3',
      createdAt: '2022-01-03',
      favorited: true,
    };
    const state: PhotosState = {
      ...mockInitialState,
      photos: [photo1, photo2, photo3],
      favorites: [photo1, photo3],
    };

    it('should select sorted photos by createdAt', () => {
      const sortedPhotos = selectPhotos({ photos: state });
      expect(sortedPhotos).toEqual([photo3, photo2, photo1]);
    });

    it('should select sorted favorites by createdAt', () => {
      const sortedFavorites = selectFavorites({ photos: state });
      expect(sortedFavorites).toEqual([photo3, photo1]);
    });

    it('should select the status of the photos', () => {
      const status = selectPhotosStatus({
        photos: { ...mockInitialState, status: 'loading' },
      });
      expect(status).toEqual('loading');
    });

    it('should select the error of the photos', () => {
      const error = selectPhotosError({
        photos: { ...mockInitialState, error: 'Error message' },
      });
      expect(error).toEqual('Error message');
    });

    it('should select the selected photo', () => {
      const selectedPhoto = selectSelectedPhoto({
        photos: { ...mockInitialState, selectedPhoto: photo1 },
      });
      expect(selectedPhoto).toEqual(photo1);
    });

    it('should select the photo size', () => {
      const photo = { ...mockPhoto, width: 100, height: 200 };
      const size = selectPhotoSize({ photos: { ...mockInitialState, photos: [photo] } });
      expect(size).toEqual({ id: '4.6 MB' });
    });

    it('should select if a photo is in favorites', () => {
      const isPhotoInFavorites = selectIsPhotoInFavorites('1')({
        photos: { ...mockInitialState, favorites: [photo1] },
      });
      expect(isPhotoInFavorites).toBeTruthy();
    });

    it('should select the info to display', () => {
      const expectedInfo = [
        { key: 'Uploaded by', value: 'uploadedBy' },
        { key: 'Created', value: 'December 31, 2021' },
        { key: 'Last modified', value: 'December 16, 2022' },
        { key: 'Dimensions', value: '100 x 100' },
        { key: 'Resolution', value: '100 x 100' },
      ];
      const info = selectInfoToDisplay({
        photos: { ...mockInitialState, selectedPhoto: photo1 },
      });
      expect(info).toEqual(expectedInfo);
    });
  });

  describe('async actions', () => {
    const photo1 = {
      ...mockPhoto,
      id: '1',
      url: 'https://test.com/1',
      createdAt: '2022-01-01',
      favorited: true,
    };
    const photo2 = {
      ...mockPhoto,
      id: '2',
      url: 'https://test.com/2',
      createdAt: '2022-01-02',
      favorited: false,
    };
    const photo3 = {
      ...mockPhoto,
      id: '3',
      url: 'https://test.com/3',
      createdAt: '2022-01-03',
      favorited: true,
    };
    const photos = [photo1, photo2, photo3];
    const mockAxios = jest.spyOn(axios, 'get');

    beforeEach(() => {
      mockAxios.mockReset();
    });

    it('should fetch photos successfully', async () => {
      const response = { data: photos };
      mockAxios.mockResolvedValue(response);
      const dispatchMock = jest.fn();

      await fetchPhotos()(dispatchMock, () => ({}), {});

      expect(dispatchMock).toHaveBeenCalledTimes(2);
      const requestId = expect.any(String);
      expect(dispatchMock).toHaveBeenCalledWith(fetchPhotos.pending(requestId));
      expect(dispatchMock).toHaveBeenCalledWith(fetchPhotos.fulfilled(photos, requestId));
    });

    it('should handle fetch photos failure', async () => {
      const error = new Error('Network Error');
      mockAxios.mockRejectedValue(error);
      const dispatchMock = jest.fn();

      await fetchPhotos()(dispatchMock, () => ({}), {});

      expect(dispatchMock).toHaveBeenCalledTimes(2);
      const requestId = expect.any(String);
      expect(dispatchMock).toHaveBeenCalledWith(fetchPhotos.pending(requestId));
      expect(dispatchMock).toHaveBeenCalledWith(fetchPhotos.rejected(error, requestId));
    });
  });
});
