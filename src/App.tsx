import React, { useEffect } from 'react';

import Galleries from '@/components/Galleries';
import Loader from '@/components/Loader';
import PhotoDetails from '@/components/PhotoDetails';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  fetchPhotos,
  selectPhotosStatus,
  selectSelectedPhoto,
} from '@/store/photosSlice';
import GlobalStyle from '@/styles/global';
import { AppWrapper, MainContent, SideContent } from '@/styles/layout';

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
      {photosStatus === 'loading' && <Loader />}
      <AppWrapper>
        <MainContent>
          <Galleries />
        </MainContent>
        <SideContent className={!selectedPhoto ? 'no-selected-photo' : ''}>
          <PhotoDetails />
        </SideContent>
      </AppWrapper>
    </>
  );
};

export default App;
