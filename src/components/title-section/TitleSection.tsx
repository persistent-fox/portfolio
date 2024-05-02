import styled from "styled-components";
import { theme } from "../../styles/theme";

type StyledTitleSectionProps = {
  fontSize?: string;
  fontWeight?: string;
};

export const TitleSection = styled.h2<StyledTitleSectionProps>`
  color: ${theme.colors.text.tertiary};
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: ${(props) => props.fontSize || "700"};
  line-height: 120%;
  text-transform: capitalize;
`;
