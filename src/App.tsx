import React from 'react';
import { AppWrapper, MainContent, SideContent } from './styles/layout'
import GlobalStyle from './styles/global';

function App() {

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <MainContent>
          {/* TODO: Implement main gallery with tabs */}
        </MainContent>
        <SideContent>
          {/* TODO: Implement selected picture details */}
        </SideContent>
      </AppWrapper>
    </>
  )
}

export default App