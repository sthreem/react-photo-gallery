import styled from 'styled-components';

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

    @media (min-width: 1024px) {
      border-top: none;
      border-right: 1px solid #CDD8E3;
    }
`;

export const SideContent = styled.aside`
  background-color: #fff;
  flex: 1;
  order: -1;

  @media (min-width: 1024px) {
    order: 0;
  }
`;