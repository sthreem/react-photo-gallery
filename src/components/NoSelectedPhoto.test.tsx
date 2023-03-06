import { render, screen } from '@testing-library/react';

import NoSelectedPhoto from '@/components/NoSelectedPhoto';

describe('NoSelectedPhoto', () => {
  it('renders the "Select a photo to see details" text', () => {
    render(<NoSelectedPhoto />);
    const text = screen.getByText('Select a photo to see details');
    expect(text).toBeInTheDocument();
  });

  it('renders the component with the correct test id', () => {
    render(<NoSelectedPhoto />);
    const component = screen.getByTestId('no-selected-photo');
    expect(component).toBeInTheDocument();
  });
});
