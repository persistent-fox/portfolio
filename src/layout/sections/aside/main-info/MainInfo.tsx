import { UserIcon } from "../../../../components/user-icon/UserIcon";
import srcImg from "../../../../assets/images/user-photo.png";
import { TitleSection } from "../../../../components/title-section/TitleSection";
import styled from "styled-components";
import { SocialIcon } from "../../../../components/social-icon/SocialIcon";
import { ThemeStyled } from "../../../../styles/Theme.styled";

interface IMainInfoProps {
  socials: string[];
}

export const MainInfo = ({ socials }: IMainInfoProps) => {
  return (
    <StyledMainInfo>
      <UserIcon srcImg={srcImg} />
      <TitleSection as={"span"} fontSize="18px" fontWeight="500">
        Rayan Adlardard
      </TitleSection>
      <JobTitle>Font-end Developer</JobTitle>
      <ul>
        {socials.map((item) => (
          <li key={item}>
            <SocialIcon
              widthIcon="14"
              heightIcon="14"
              viewBox="0 0 14 14"
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
`;

export const JobTitle = styled.h2`
  color: ${ThemeStyled.colors.text.dark};
  font-kerning: none;
  font-feature-settings: "calt" off;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
`;
