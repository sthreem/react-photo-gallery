import { render, screen } from '@testing-library/react';

import Loader from '@/components/Loader';

describe('Loader', () => {
  test('renders loader with spinner', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    const spinner = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
