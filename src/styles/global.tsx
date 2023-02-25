import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
    font-weight: 300;
  }

  h1 {
    font-weight: 700;
    margin: 0;
    font-size: 2rem;
  }

  h2 {
    font-weight: 600;
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
  }

  .semibold {
    font-weight: 400;
  }

  .bold {
    font-weight: 600;
  }

  .light {
    color: #64748B;
  }

  .dark {
    color: #161D30;
  }
`

export default GlobalStyle
