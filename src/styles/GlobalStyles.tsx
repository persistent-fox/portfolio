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
  
  // * {
  //   scrollbar-width: thin;
  //   scrollbar-color: linear-gradient(to top,
  //   ${theme.colors.secondary},
  //   ${theme.colors.accent}) ${theme.colors.tertiary};
  // }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${theme.colors.tertiary};
  }

  *::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to top,
    ${theme.colors.secondary},
    ${theme.colors.accent});
    border-radius: 5px;
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
    ${font({
      weight: 700,
      color: theme.colors.text.dark,
      Fmin: 15,
      Fmax: 25,
    })}
  }

  body {
    background-color: ${theme.colors.grey.medium};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: none;
    font-feature-settings: "calt" off;
    ${font({ Fmin: 15, Fmax: 20 })}
`;
