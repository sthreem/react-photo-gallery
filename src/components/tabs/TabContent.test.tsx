import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import TabContent from '@/components/tabs/TabContent';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('TabContent', () => {
  test('renders tab content container', () => {
    const store = mockStore({
      photos: { ...mockInitialState, photos: [mockPhoto], favorites: [mockPhoto] },
    });

    render(
      <Provider store={store}>
        <TabContent index={0} isHidden={false} isFavorites={false} />
      </Provider>,
    );
    const tabContentContainer = screen.getByTestId('tab-content-0');
    expect(tabContentContainer).toBeInTheDocument();
  });

  test('renders photo thumbnails for photos tab', () => {
    const store = mockStore({
      photos: { ...mockInitialState, photos: [mockPhoto], favorites: [mockPhoto] },
    });

    render(
      <Provider store={store}>
        <TabContent index={0} isHidden={false} isFavorites={false} />
      </Provider>,
    );
    const photoThumbnails = screen.getAllByTestId(/^basic-photo-elements/);
    expect(photoThumbnails).toHaveLength(1);
  });

  test('renders photo thumbnails for favorites tab', () => {
    const store = mockStore({
      photos: { ...mockInitialState, photos: [mockPhoto], favorites: [mockPhoto] },
    });
    render(
      <Provider store={store}>
        <TabContent index={1} isHidden={false} isFavorites={true} />
      </Provider>,
    );
    const photoThumbnails = screen.getAllByTestId(/^basic-photo-elements/);
    expect(photoThumbnails).toHaveLength(1);
  });
});
