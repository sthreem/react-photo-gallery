import styled from 'styled-components';

// Main app view
export const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.main`
  background-color: #f7fafc;
  flex: 2;
  border-top: 1px solid #CDD8E3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem;

    @media (min-width: 1024px) {
      border-top: none;
      border-right: 1px solid #CDD8E3;
      padding: 2.5rem;
    }
`;

export const SideContent = styled.aside`
  background-color: #fff;
  flex: 1;
  order: -1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    order: 0;
    padding: 2.5rem;
  }
`;

// Inner galleries view
export const GalleryContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 950px
  }
`;