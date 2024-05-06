import styled from "styled-components";
import { theme } from "../styles/theme";
import { font } from "../styles/Common";

export const TitleSection = styled.h2`
  text-transform: capitalize;
  ${font({
    weight: 700,
    color: theme.colors.text.tertiary,
    Fmin: 26,
    Fmax: 48,
  })}
`;
