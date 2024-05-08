import { UserIcon } from "../../../../components/user-icon/UserIcon";
import srcImg from "../../../../assets/images/user-photo.png";
import { SocialIcon } from "../../../../components/social-icon/SocialIcon";
import { TitleCard } from "../../../../components/TitleCard";
import { S } from "./../Aside_Styles";
import React from "react";

interface IMainInfoProps {
  socials: string[];
}

export const MainInfo: React.FC<IMainInfoProps> = ({
  socials,
}: IMainInfoProps) => {
  return (
    <S.MainInfo>
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
    </S.MainInfo>
  );
};
