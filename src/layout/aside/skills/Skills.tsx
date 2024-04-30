import { TitleSection } from "../../../components/title-section/TitleSection";
import { extraSkills, languages } from "../../../mock/data";
import { ProgressBar } from "../../../components/progress-bar/ProgressBar";
import { List } from "../../../components/list/List";
import styled from "styled-components";

interface ISkillsProps {
  skills: string[][] | string[];
  title: string;
  list?: boolean;
}

export const Skills = ({ skills, title, list }: ISkillsProps) => {
  return (
    <section>
      <TitleSection fontSize="18px" fontWeight="500">
        {title}
      </TitleSection>
      <SkillsWrapper>
        {list ? (
          <List listItems={extraSkills} />
        ) : (
          skills.map((item) => (
            <ProgressBar key={item[0]} skillName={item[0]} percent={item[1]} />
          ))
        )}
      </SkillsWrapper>
    </section>
  );
};

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  margin-top: 15px;
`;
