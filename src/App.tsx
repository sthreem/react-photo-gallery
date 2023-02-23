import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchPhotos, selectPhotosStatus } from '@/store/photosSlice';
import { AppWrapper, MainContent, SideContent } from '@/styles/layout';
import GlobalStyle from '@/styles/global';
import Loader from '@/components/Loader'
import Galleries from '@/components/Galleries'

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const photosStatus = useAppSelector(selectPhotosStatus);

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
        <SideContent>
          {/* TODO: Implement selected photo details */}
          <span>PICTURE DETAILS</span>
        </SideContent>
      </AppWrapper>
    </>
  );
};

export default App;