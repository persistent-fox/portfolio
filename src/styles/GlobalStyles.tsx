import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { font } from "./Common";

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: none;
    font-feature-settings: "calt" off;
    ${font({ Fmin: 15, Fmax: 20 })}
`;
