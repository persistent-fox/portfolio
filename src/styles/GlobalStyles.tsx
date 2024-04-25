import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  body {
    background-color: #F0F0F6;
  }
`;
