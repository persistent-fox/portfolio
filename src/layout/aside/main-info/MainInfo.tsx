import { UserIcon } from "../../../components/user-icon/UserIcon";
import srcImg from "../../../assets/images/photo.webp";
import { TitleSection } from "../../../components/title-section/TitleSection";
import { NavIcon } from "../../../components/nav-icon/NavIcon";
import styled from "styled-components";
import { SocialIcon } from "../../../components/social-icon/SocialIcon";
import { ThemeStyled } from "../../../styles/Theme.styled";

interface IMainInfoProps {
  socials: string[];
}

export const MainInfo = ({ socials }: IMainInfoProps) => {
  return (
    <StyledMainInfo>
      <UserIcon srcImg={srcImg} />
      <TitleSection fontSize="18px" fontWeight="500">
        Rayan Adlardard
      </TitleSection>
      <h2 className="title">Font-end Developer</h2>
      <ul>
        {socials.map((item) => (
          <li key={item}>
            <SocialIcon
              width="14"
              height="14"
              viewBox="0 0 14 14"
              social
              iconId={item}
            />
          </li>
        ))}
      </ul>
    </StyledMainInfo>
  );
};

export const StyledMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .title {
    color: ${ThemeStyled.colors.text.dark};
    font-kerning: none;
    font-feature-settings: "calt" off;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }
`;
