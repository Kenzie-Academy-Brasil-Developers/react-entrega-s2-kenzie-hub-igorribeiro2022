import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  :root {
    --pink-primary: #FF577F;
    --pink-focus: #FF427F;
    --primary-negative: #59323F;

    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;

    --sucess: #3FE864;
    --negative: #E83F5B;
  }

  body {
    background: var(--gray-4);
    color: var(--gray-0);
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 0px;
  }

  body, input, button, h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
export default GlobalStyle;
