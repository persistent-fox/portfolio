import styled from "styled-components";
import { font } from "../styles/Common";

export const TitleSection = styled.h2`
  text-transform: capitalize;
  ${font({
    weight: 700,
    Fmin: 26,
    Fmax: 48,
  })}
  color: ${(props) => props.theme.colors.text.tertiary}
`;
