import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

import BasicPhotoElements from '@/components/photos/BasicPhotoElements';
import { RootState } from '@/store';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('BasicPhotoElements', () => {
  let store: MockStoreEnhanced<RootState>;

  it('renders the photo with correct caption and size', () => {
    store = mockStore({ photos: { ...mockInitialState, photos: [mockPhoto] } });

    render(
      <Provider store={store}>
        <BasicPhotoElements photo={mockPhoto} />
      </Provider>,
    );

    const photoCaption = screen.getByText(mockPhoto.filename);
    const photoSize = screen.getByText('4.6 MB');
    const photoImage = screen.getByAltText(mockPhoto.description);

    expect(photoCaption).toBeInTheDocument();
    expect(photoSize).toBeInTheDocument();
    expect(photoImage).toBeInTheDocument();
    expect(photoImage).toHaveAttribute('src', mockPhoto.url);
  });

  it('sets the photo as selected when clicked in a grid', () => {
    store = mockStore({ photos: { ...mockInitialState, photos: [mockPhoto] } });

    render(
      <Provider store={store}>
        <BasicPhotoElements photo={mockPhoto} isInGrid={true} />
      </Provider>,
    );

    const photoImageWrapper = screen.getByTestId(`photo-image-wrapper-${mockPhoto.id}`);
    fireEvent.click(photoImageWrapper);

    const selectedPhoto = store.getActions().find((a) => a.type === 'photos/selectPhoto');
    const unselectedPhoto = store
      .getActions()
      .find((a) => a.type === 'photos/unselectPhoto');

    expect(selectedPhoto.payload.id).toBe(mockPhoto.id);

    fireEvent.click(photoImageWrapper);

    expect(unselectedPhoto).not.toBeNull();
  });

  it('does not set the photo as selected when clicked outside grid', () => {
    store = mockStore({ photos: { ...mockInitialState, photos: [mockPhoto] } });

    render(
      <Provider store={store}>
        <BasicPhotoElements photo={mockPhoto} isInGrid={false} />
      </Provider>,
    );

    const photoImageWrapper = screen.getByTestId(`photo-image-wrapper-${mockPhoto.id}`);
    fireEvent.click(photoImageWrapper);

    const selectPhotoAction = store
      .getActions()
      .find((a) => a.type === 'photos/selectPhoto');
    expect(selectPhotoAction).toBeUndefined();
  });
});
