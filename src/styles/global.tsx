import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-weight: 700;
    margin: 0;
  }

  p {
    margin: 0;
  }

  .body {
    font-size: .9rem;
    font-weight: 300;
    color: #64748B;
  }

  .body-semibold-light {
    font-size: .9rem;
    font-weight: 600;
    color: #64748B;
  }

  .body-semibold-dark {
    font-size: .9rem;
    font-weight: 600;
    color: #161D30;
  }
`;

export default GlobalStyle;
