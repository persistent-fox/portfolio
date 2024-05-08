import { FlexWrapper } from "../../../components/FlexWrapper";
import { socials } from "../../../mock/data";
import { SocialIcon } from "../../../components/social-icon/SocialIcon";
import { S } from "./Footer_Styled";
import React from "react";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = ({}: IFooterProps) => {
  return (
    <S.Footer>
      <S.Name>Margarita</S.Name>
      <FlexWrapper gap={"10px"} as={"ul"}>
        {socials.map((item) => (
          <li key={item}>
            <SocialIcon
              widthIcon={"14px"}
              heightIcon={"14px"}
              viewBox={"0 0 14 14"}
              iconId={item}
            />
          </li>
        ))}
      </FlexWrapper>
      <S.Copyright>
        © 2024 Margarita Abdullina, All Rights Reserved.
      </S.Copyright>
    </S.Footer>
  );
};
