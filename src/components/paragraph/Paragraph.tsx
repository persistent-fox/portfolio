import styled from "styled-components";

type ParagraphProps = {
  color?: string;
  fontWeight?: string;
  fontSize?: string;
};

export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => props.color || "#767676"};
  font-kerning: none;
  font-feature-settings: "calt" off;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: 24px;
  text-transform: capitalize;
`;