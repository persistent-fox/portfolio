import React from "react";
import { S } from "./../Aside_Styles";
import { MainInfo } from "../main-info/MainInfo";
import { Divider } from "../../../../components/Divider";
import { Skills } from "../skills/Skills";
import { Button } from "../../../../components/button/Button";
import { languages, skills, socials } from "../../../../mock/data";
import { Icon } from "../../../../components/icon/Icon";

interface IAsideProps {
  onClick: () => void;
  isOpen: boolean;
}

export const UserPanel: React.FC<IAsideProps> = ({
  onClick,
  isOpen,
}: IAsideProps) => {
  return (
    <S.UserPanel isOpen={isOpen}>
      <S.Close onClick={onClick}>
        <Icon
          viewBox={"0 0 448 512"}
          width={"25px"}
          height={"20px"}
          iconId={"menu-arrow"}
        />
      </S.Close>
      <MainInfo socials={socials} />
      <Divider />
      <Skills title="Languages" skills={languages} />
      <Divider />
      <Skills title="Skills" skills={skills} />
      <Divider />
      <Skills list title="Extra Skills" skills={skills} />
      <Divider />
      <Button width="14" height="17" viewBox="0 0 14 17" iconId="download">
        Download cv
      </Button>
    </S.UserPanel>
  );
};
