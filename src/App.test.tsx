import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';

import App from '@/App';
import { RootState } from '@/store';
import { mockInitialState, mockPhoto, mockStore } from '@/test-utils/mocks';

describe('App', () => {
  let store: MockStoreEnhanced<RootState>;

  it('renders the loader when photos are loading', () => {
    store = mockStore({ photos: { ...mockInitialState, status: 'loading' } });
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('renders the Galleries component', () => {
    store = mockStore({ photos: { ...mockInitialState } });
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const galleries = screen.getByTestId('galleries');
    expect(galleries).toBeInTheDocument();
  });

  it('renders the PhotoDetails component when a photo is selected', () => {
    store = mockStore({ photos: { ...mockInitialState, photos: [mockPhoto] } });
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const photoDetails = screen.getByTestId('photo-details');
    expect(photoDetails).toBeInTheDocument();
  });

  it('updates the PhotoDetails component when a photo is selected in Galleries', () => {
    store = mockStore({
      photos: { ...mockInitialState, photos: [mockPhoto], selectedPhoto: mockPhoto },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const photo1Button = screen.getByText('Delete') as HTMLButtonElement;
    userEvent.click(photo1Button);

    const photoDetails = screen.getByTestId('photo-details');
    expect(photoDetails).toBeInTheDocument();
  });
});
