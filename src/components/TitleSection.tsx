import styled from "styled-components";
import { theme } from "../styles/theme";

export const TitleSection = styled.h2`
  color: ${theme.colors.text.tertiary};
  font-size: calc((100vw - 375px) / (1920 - 375) * (48 - 26) + 26px);
  font-weight: 700;
  text-transform: capitalize;
`;
