import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import store, { AppDispatch, RootState, useAppDispatch, useAppSelector } from '@/store';

jest.mock('react-redux');

const useDispatchMock = useDispatch as jest.Mock;
const useSelectorMock = useSelector as jest.Mock;

describe('store', () => {
  it('should export the store', () => {
    expect(store).toBeDefined();
  });

  it('should export the RootState type', () => {
    const state: RootState = store.getState();
    expect(state).toBeDefined();
  });

  it('should export the AppDispatch type', () => {
    const dispatch: AppDispatch = store.dispatch;
    expect(dispatch).toBeDefined();
  });

  it('should export the useAppDispatch hook', () => {
    useDispatchMock.mockReturnValue(jest.fn());
    const dispatch = useAppDispatch();
    expect(dispatch).toBeDefined();
  });

  it('should export the useAppSelector hook', () => {
    useSelectorMock.mockReturnValue(jest.fn());
    const selectedState = useAppSelector((state) => state.photos);
    expect(selectedState).toBeDefined();
  });
});
