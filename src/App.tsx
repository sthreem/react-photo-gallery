import React from 'react';
import { AppWrapper, MainContent, SideContent } from './styles/layout'
import GlobalStyle from './styles/global';

const App: React.FC = () => {

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
  )
}

export default App