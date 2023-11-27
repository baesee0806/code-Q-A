import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    /* 스크롤바 없애는 코드입니다. */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
    display: none;
  }
  }
`;

export default GlobalStyle;
