import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }
  body {
    background-color: ${theme.colors.grey.medium};  margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: none;
    font-feature-settings: "calt" off;
    color: ${theme.colors.text.dark};
    font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
    font-weight: 400;
    line-height: 1.2;
  }
`;
