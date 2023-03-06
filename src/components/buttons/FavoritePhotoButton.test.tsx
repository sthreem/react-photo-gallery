import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

import FavoritePhotoButton from '@/components/buttons/FavoritePhotoButton';
import { RootState } from '@/store';
import { addToFavorites, removeFromFavorites } from '@/store/photosSlice';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('FavoritePhotoButton', () => {
  const store: MockStoreEnhanced<RootState> = mockStore({
    photos: { ...mockInitialState, favorites: [mockPhoto] },
  });
  const dispatch = jest.fn();
  store.dispatch = dispatch;

  it('renders properly', () => {
    render(
      <Provider store={store}>
        <FavoritePhotoButton photo={mockPhoto} isFavorite={true} isInGrid={true} />
      </Provider>,
    );

    const favoriteButton = screen.getByTestId(`favorite-photo-button-${mockPhoto.id}`);
    expect(favoriteButton).toBeInTheDocument();
  });

  it('dispatches removeFromFavorites when photo is already a favorite and clicked', () => {
    render(
      <Provider store={store}>
        <FavoritePhotoButton photo={mockPhoto} isFavorite={true} isInGrid={true} />
      </Provider>,
    );

    const favoriteButton = screen.getByTestId(`favorite-button-${mockPhoto.id}`);
    fireEvent.click(favoriteButton);

    expect(dispatch).toHaveBeenCalledWith(removeFromFavorites(mockPhoto));
  });

  it('dispatches addToFavorites when photo is not a favorite and clicked', () => {
    render(
      <Provider store={store}>
        <FavoritePhotoButton photo={mockPhoto} isFavorite={false} isInGrid={true} />
      </Provider>,
    );

    const favoriteButton = screen.getByTestId(`favorite-button-${mockPhoto.id}`);
    fireEvent.click(favoriteButton);

    expect(dispatch).toHaveBeenCalledWith(addToFavorites(mockPhoto));
  });
});
