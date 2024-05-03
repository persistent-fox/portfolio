import { extraSkills } from "../../../../mock/data";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import { List } from "../../../../components/list/List";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { TitleCard } from "../../../../components/TitleCard";

interface ISkillsProps {
  skills: string[][] | string[];
  title: string;
  list?: boolean;
}

export const Skills = ({ skills, title, list }: ISkillsProps) => {
  return (
    <StyledSkills>
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
    </StyledSkills>
  );
};

export const StyledSkills = styled.section`
  ${TitleCard} {
    margin-bottom: 15px;
  }
`;
