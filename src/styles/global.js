import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    color:#ffffff;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', serif;
    font-size: 16px;
    outline: none;
  }
`