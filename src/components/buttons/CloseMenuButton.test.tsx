import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

import CloseMenuButton from '@/components/buttons/CloseMenuButton';
import { RootState } from '@/store';
import { unselectPhoto } from '@/store/photosSlice';
import { mockInitialState, mockStore } from '@/test-utils/mocks';

describe('CloseMenuButton', () => {
  const store: MockStoreEnhanced<RootState> = mockStore({
    photos: { ...mockInitialState },
  });
  const dispatch = jest.fn();
  store.dispatch = dispatch;

  it('renders properly', () => {
    render(
      <Provider store={store}>
        <CloseMenuButton />
      </Provider>,
    );

    const closeButton = screen.getByTestId('close-menu-button');
    expect(closeButton).toBeInTheDocument();
  });

  it('dispatches unselectPhoto action when clicked', () => {
    render(
      <Provider store={store}>
        <CloseMenuButton />
      </Provider>,
    );

    const closeButton = screen.getByTestId('close-menu-button');
    fireEvent.click(closeButton);

    expect(dispatch).toHaveBeenCalledWith(unselectPhoto());
  });
});
