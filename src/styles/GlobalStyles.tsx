import { createGlobalStyle } from "styled-components";
import { ThemeStyled } from "./Theme.styled";

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
  body {
    background-color: ${ThemeStyled.colors.grey.medium};
  }
`;
