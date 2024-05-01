import { TitleSection } from "../../../../components/title-section/TitleSection";
import { extraSkills, languages } from "../../../../mock/data";
import { ProgressBar } from "../../../../components/progress-bar/ProgressBar";
import { List } from "../../../../components/list/List";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

interface ISkillsProps {
  skills: string[][] | string[];
  title: string;
  list?: boolean;
}

export const Skills = ({ skills, title, list }: ISkillsProps) => {
  return (
    <section>
      <TitleSection mb={"15px"} fontSize="18px" fontWeight="500">
        {title}
      </TitleSection>
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
    </section>
  );
};
