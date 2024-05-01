import styled from "styled-components";
import { ThemeStyled } from "../../styles/Theme.styled";

type ParagraphProps = {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  maxWidth?: string;
  textAlign?: string;
  mb?: string;
};

export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => props.color || ThemeStyled.colors.text.dark};
  font-kerning: none;
  font-feature-settings: "calt" off;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: 24px;
  text-transform: capitalize;
  max-width: ${(props) => props.maxWidth || "none"};
  text-align: ${(props) => props.textAlign || "left"};
  margin-bottom: ${(props) => props.mb || "0"};
`;
