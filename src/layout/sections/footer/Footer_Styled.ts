import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Footer = styled.footer`
  position: relative;
  padding: 10px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text.tertiary};
  font-kerning: none;
  font-feature-settings: "calt" off;
  text-transform: capitalize;
`;

const Copyright = styled.small`
  font-size: 12px;
`;

const Name = styled.span`
  font-size: 24px;
  color: ${theme.colors.text.tertiary};
  margin-bottom: 20px;
`;

export const S = {
  Footer,
  Copyright,
  Name,
};
