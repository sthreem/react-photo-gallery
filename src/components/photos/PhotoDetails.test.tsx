import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

import PhotoDetails from '@/components/photos/PhotoDetails';
import { RootState } from '@/store';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('PhotoDetails', () => {
  let store: MockStoreEnhanced<RootState>;

  it('renders NoSelectedPhoto component when no photo is selected', () => {
    store = mockStore({ photos: { ...mockInitialState } });
    render(
      <Provider store={store}>
        <PhotoDetails />
      </Provider>,
    );

    const noSelectedPhoto = screen.getByTestId('no-selected-photo');
    expect(noSelectedPhoto).toBeInTheDocument();
  });

  it('renders CloseMenuButton, BasicPhotoElements, DetailedPhotoElements and DeletePhotoButton when a photo is selected', () => {
    store = mockStore({
      photos: { ...mockInitialState, photos: [mockPhoto], selectedPhoto: mockPhoto },
    });

    render(
      <Provider store={store}>
        <PhotoDetails />
      </Provider>,
    );

    const closeMenuButton = screen.getByTestId('close-menu-button');
    const basicPhotoElements = screen.getByTestId('basic-photo-elements');
    const detailedPhotoElements = screen.getByTestId('detailed-photo-elements');
    const deletePhotoButton = screen.getByTestId(`delete-photo-button-${mockPhoto.id}`);

    expect(closeMenuButton).toBeInTheDocument();
    expect(basicPhotoElements).toBeInTheDocument();
    expect(detailedPhotoElements).toBeInTheDocument();
    expect(deletePhotoButton).toBeInTheDocument();
  });
});
