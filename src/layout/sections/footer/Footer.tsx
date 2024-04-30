import styled from "styled-components";
import { TitleSection } from "../../../components/title-section/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { NavIcon } from "../../../components/nav-icon/NavIcon";
import { socials } from "../../../mock/data";
import { ThemeStyled } from "../../../styles/Theme.styled";
import { SocialIcon } from "../../../components/social-icon/SocialIcon";

interface IFooterProps {}

export const Footer = ({}: IFooterProps) => {
  return (
    <StyledFooter>
      <TitleSection fontSize={"24px"} as={"span"}>
        Margarita
      </TitleSection>
      <FlexWrapper gap={"10px"} as={"ul"}>
        {socials.map((item) => (
          <li key={item}>
            <SocialIcon
              social
              width={"14px"}
              height={"14px"}
              viewBox={"0 0 14 14"}
              iconId={item}
            />
          </li>
        ))}
      </FlexWrapper>
      <Copyright>© 2024 Margarita Abdullina, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

export const StyledFooter = styled.footer`
  padding: 10px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${ThemeStyled.colors.primary};
  color: ${ThemeStyled.colors.text.tertiary};
  font-kerning: none;
  font-feature-settings: "calt" off;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
`;

export const Copyright = styled.small`
  font-size: 12px;
`;
