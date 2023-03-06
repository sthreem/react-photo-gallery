import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Galleries from '@/components/Galleries';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('Galleries', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      photos: { ...mockInitialState, photos: [mockPhoto] },
    });

    render(
      <Provider store={store}>
        <Galleries />
      </Provider>,
    );
  });

  test('renders galleries container', () => {
    const galleriesContainer = screen.getByTestId('galleries');
    expect(galleriesContainer).toBeInTheDocument();
  });

  test('renders galleries heading', () => {
    const galleriesHeading = screen.getByText('Photos');
    expect(galleriesHeading).toBeInTheDocument();
  });

  test('renders galleries tabs', () => {
    const galleriesTabs = screen.getByRole('tabpanel');
    expect(galleriesTabs).toBeInTheDocument();
  });
});
