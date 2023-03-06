import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import GalleriesTabs from '@/components/tabs/GalleriesTabs';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('GalleriesTabs', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      photos: { ...mockInitialState, photos: [mockPhoto] },
    });

    render(
      <Provider store={store}>
        <GalleriesTabs />
      </Provider>,
    );
  });

  test('renders tabs container', () => {
    const tabsContainer = screen.getByTestId('galleries-tabs');
    expect(tabsContainer).toBeInTheDocument();
  });

  test('renders tabs navigation buttons', () => {
    const navigationButtons = screen.getAllByRole('tab');
    expect(navigationButtons).toHaveLength(2);
    expect(navigationButtons[0]).toHaveTextContent('Recently Added');
    expect(navigationButtons[1]).toHaveTextContent('Favorited');
  });

  test('changes active tab when navigation button is clicked', () => {
    const recentlyAddedButton = screen.getByTestId('navigation-button-0');
    const favoritedButton = screen.getByTestId('navigation-button-1');
    const recentlyAddedTab = screen.getByTestId('tab-content-0');
    const favoritedTab = screen.getByTestId('tab-content-1');

    // Click on the favorited tab button and check that it becomes active
    fireEvent.click(favoritedButton);
    expect(favoritedButton).toHaveAttribute('aria-selected', 'true');
    expect(favoritedTab).not.toHaveAttribute('hidden');

    // Click on the recently added tab button and check that it becomes active
    fireEvent.click(recentlyAddedButton);
    expect(recentlyAddedButton).toHaveAttribute('aria-selected', 'true');
    expect(favoritedTab).toHaveAttribute('hidden');
    expect(recentlyAddedTab).not.toHaveAttribute('hidden');
  });
});
