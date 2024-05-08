import React from "react";
import { S } from "./../Aside_Styles";
import { MainInfo } from "../main-info/MainInfo";
import { Divider } from "../../../../components/Divider";
import { Skills } from "../skills/Skills";
import { Button } from "../../../../components/button/Button";
import { languages, skills, socials } from "../../../../mock/data";

interface IAsideProps {
  isOpen: boolean;
}

export const UserPanel: React.FC<IAsideProps> = ({ isOpen }: IAsideProps) => {
  return (
    <S.UserPanel isOpen={isOpen}>
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
