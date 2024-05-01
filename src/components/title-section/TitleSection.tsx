import styled from "styled-components";
import { ThemeStyled } from "../../styles/Theme.styled";

type StyledTitleSectionProps = {
  fontSize?: string;
  fontWeight?: string;
  mb?: string;
};

export const TitleSection = styled.h2<StyledTitleSectionProps>`
  color: ${ThemeStyled.colors.text.tertiary};
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: ${(props) => props.fontSize || "700"};
  line-height: 120%;
  text-transform: capitalize;
  margin-bottom: ${(props) => props.mb || "0"};
`;
