import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --overlay-color: rgba(255, 255, 255, 0.8);
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
    font-weight: 300;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
