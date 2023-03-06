import styled from 'styled-components';

export const StyledLoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--overlay-color);
`;

export const StyledSpinner = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
