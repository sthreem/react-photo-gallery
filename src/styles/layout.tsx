import styled from 'styled-components';

// Main app view
export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const StyledMainContent = styled.main`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem;
  background-color: #f7fafc;
  overflow-x: auto;

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

export const StyledSideContent = styled.aside<{ isSelected: boolean }>`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  right: 0;
  width: 0;
  padding: 0;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  max-height: 100%;

  ${(props) => {
    if (props.isSelected) {
      return `
        padding: 1.5rem;
        width: 100%;
      `;
    }
  }}

  @media (min-width: 1024px) {
    position: relative;
    border-left: 1px solid #cdd8e3;
    padding: 2.5rem;
  }
`;

// Inner galleries view
export const StyledGalleriesContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 950px;
  }
`;
