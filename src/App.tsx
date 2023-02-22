import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchPictures, selectPicturesStatus } from '@/store/picturesSlice';
import { AppWrapper, MainContent, SideContent } from '@/styles/layout';
import GlobalStyle from '@/styles/global';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const picturesStatus = useAppSelector(selectPicturesStatus);

  useEffect(() => {
    dispatch(fetchPictures());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <MainContent>
          {/* TODO: Implement main gallery with tabs */}
          <span>GALLERY</span>
        </MainContent>
        <SideContent>
          {/* TODO: Implement selected picture details */}
          <span>PICTURE DETAILS</span>
        </SideContent>
      </AppWrapper>
    </>
  );
};

export default App;