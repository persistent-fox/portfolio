import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  padding: 10px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text.tertiary};
  font-kerning: none;
  font-feature-settings: "calt" off;
  text-transform: capitalize;
  @media ${(props) => props.theme.media.large} {
    padding-bottom: 100px;
  }
`;

const Copyright = styled.small`
  font-size: 12px;
`;

const Name = styled.span`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text.tertiary};
  margin-bottom: 20px;
`;

export const S = {
  Footer,
  Copyright,
  Name,
};
