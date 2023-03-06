import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

import DeletePhotoButton from '@/components/buttons/DeletePhotoButton';
import { RootState } from '@/store';
import { deletePhoto } from '@/store/photosSlice';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('DeletePhotoButton', () => {
  const store: MockStoreEnhanced<RootState> = mockStore({
    photos: { ...mockInitialState },
  });
  const dispatch = jest.fn();
  store.dispatch = dispatch;

  it('renders properly', () => {
    render(
      <Provider store={store}>
        <DeletePhotoButton photo={mockPhoto} />
      </Provider>,
    );

    const deleteButton = screen.getByTestId(`delete-photo-button-${mockPhoto.id}`);
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveTextContent('Delete');
  });

  it('dispatches deletePhoto action when clicked', () => {
    render(
      <Provider store={store}>
        <DeletePhotoButton photo={mockPhoto} />
      </Provider>,
    );

    const deleteButton = screen.getByTestId(`delete-photo-button-${mockPhoto.id}`);
    fireEvent.click(deleteButton);

    expect(dispatch).toHaveBeenCalledWith(deletePhoto(mockPhoto));
  });
});
