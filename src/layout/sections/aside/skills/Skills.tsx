import { extraSkills } from "../../../../mock/data";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import { List } from "../../../../components/list/List";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { TitleCard } from "../../../../components/TitleCard";
import { S } from "./../Aside_Styles";
import React from "react";

interface ISkillsProps {
  skills: string[][] | string[];
  title: string;
  list?: boolean;
}

export const Skills: React.FC<ISkillsProps> = ({
  skills,
  title,
  list,
}: ISkillsProps) => {
  return (
    <S.Skills>
      <TitleCard>{title}</TitleCard>
      {list ? (
        <List listItems={extraSkills} />
      ) : (
        <FlexWrapper as={"ul"} direction={"column"} gap={"10px"}>
          {skills.map((item) => (
            <li key={item[0]}>
              <ProgressBar skillName={item[0]} percent={item[1]} />
            </li>
          ))}
        </FlexWrapper>
      )}
    </S.Skills>
  );
};
