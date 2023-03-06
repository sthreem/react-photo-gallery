import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Photo, PhotosState } from '@/types';

import { RootState } from '../store';

const middlewares = [thunk];
const mockStore = configureStore<RootState>(middlewares);

const mockInitialState: PhotosState = {
  status: 'idle',
  photos: [],
  error: null,
  selectedPhoto: null,
  favorites: [],
};

const mockPhoto: Photo = {
  id: "id",
  url: "url",
  filename: "filename",
  description: "description",
  uploadedBy: "uploadedBy",
  createdAt: "2017-07-15T08:23:20.462Z",
  updatedAt: "2022-12-16T12:41:33.736Z",
  dimensions: {
    height: 100,
    width: 100,
  },
  resolution: {
    height: 100,
    width: 100,
  },
  sizeInBytes: 4812732,
  sharedWith: [
    {
      id: "id",
      name: "name",
      avatar: "avatar",
    }
  ],
  favorited: false,
}

export { mockInitialState, mockPhoto, mockStore };
