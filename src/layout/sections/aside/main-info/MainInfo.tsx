import { UserIcon } from "../../../../components/user-icon/UserIcon";
import srcImg from "../../../../assets/images/user-photo.png";
import { TitleSection } from "../../../../components/TitleSection";
import styled from "styled-components";
import { SocialIcon } from "../../../../components/social-icon/SocialIcon";
import { theme } from "../../../../styles/theme";
import { TitleCard } from "../../../../components/TitleCard";

interface IMainInfoProps {
  socials: string[];
}

export const MainInfo = ({ socials }: IMainInfoProps) => {
  return (
    <StyledMainInfo>
      <UserIcon srcImg={srcImg} />
      <TitleCard as={"span"}>Margarita Abdullina</TitleCard>
      <h2>Font-end Developer</h2>
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
