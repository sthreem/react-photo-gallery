import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import DetailedPhotoElements from '@/components/photos/DetailedPhotoElements';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('DetailedPhotoElements', () => {
  it('renders information about the photo', () => {
    const store = mockStore({
      photos: { ...mockInitialState, selectedPhoto: mockPhoto },
    });

    render(
      <Provider store={store}>
        <DetailedPhotoElements photo={mockPhoto} />
      </Provider>,
    );

    const informationHeading = screen.getByText('Information');
    const informationRows = screen.getAllByTestId(/^photo-info-row-\d+$/);
    const photoDescription = screen.getByTestId('photo-description');

    expect(informationHeading).toBeInTheDocument();
    expect(informationRows).toHaveLength(5);
    expect(screen.getByText('Uploaded by')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Last modified')).toBeInTheDocument();
    expect(screen.getByText('Dimensions')).toBeInTheDocument();
    expect(screen.getByText('Resolution')).toBeInTheDocument();
    expect(photoDescription).toBeInTheDocument();
    expect(photoDescription).toHaveTextContent(mockPhoto.description);
  });

  it('does not render photo description when not present', () => {
    const store = mockStore({
      photos: { ...mockInitialState, selectedPhoto: mockPhoto },
    });
    const photoWithoutDescription = { ...mockPhoto, description: '' };

    render(
      <Provider store={store}>
        <DetailedPhotoElements photo={photoWithoutDescription} />
      </Provider>,
    );

    const informationHeading = screen.getByText('Information');
    const informationRows = screen.getAllByTestId(/^photo-info-row-\d+$/);
    const photoDescription = screen.queryByTestId('photo-description');

    expect(informationHeading).toBeInTheDocument();
    expect(informationRows).toHaveLength(5);
    expect(photoDescription).toBeNull();
  });
});
