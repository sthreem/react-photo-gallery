import React from 'react';

import { StyledLoaderOverlay, StyledSpinner } from '@/styles/loader';

const Loader: React.FC = () => {
  return (
    <StyledLoaderOverlay data-testid='loader' >
      <StyledSpinner />
    </StyledLoaderOverlay>
  );
};

export default Loader;
