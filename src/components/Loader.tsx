import React from 'react';

import { StyledLoaderOverlay, StyledSpinner } from '@/styles/loader';

const Loader: React.FC = () => {
  return (
    <StyledLoaderOverlay data-testid="loader">
      <StyledSpinner role="progressbar" />
    </StyledLoaderOverlay>
  );
};

export default Loader;
