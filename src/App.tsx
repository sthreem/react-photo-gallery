import React, { useEffect } from 'react';

import Galleries from '@/components/Galleries';
import Loader from '@/components/Loader';
import PhotoDetails from '@/components/photos/PhotoDetails';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  fetchPhotos,
  selectPhotosStatus,
  selectSelectedPhoto,
} from '@/store/photosSlice';
import GlobalStyle from '@/styles/global';
import { StyledAppWrapper, StyledMainContent, StyledSideContent } from '@/styles/layout';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const photosStatus = useAppSelector(selectPhotosStatus);
  const selectedPhoto = useAppSelector(selectSelectedPhoto);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {/* Display loader while fetching pictures */}
      {photosStatus === 'loading' && <Loader data-testid="loader" />}
      <StyledAppWrapper>
        {/* Main content for tabs and galleries */}
        <StyledMainContent>
          <Galleries />
        </StyledMainContent>
        {/* Side content for selected picture's details */}
        <StyledSideContent isSelected={!!selectedPhoto} data-testid="photo-details">
          <PhotoDetails />
        </StyledSideContent>
      </StyledAppWrapper>
    </>
  );
};

export default App;
