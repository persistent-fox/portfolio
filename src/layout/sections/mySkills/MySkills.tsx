import styled from "styled-components";
import { TitleSection } from "../../../components/title-section/TitleSection";
import { Paragraph } from "../../../components/paragraph/Paragraph";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";

interface IMySkillsProps {}

export const MySkills = ({}: IMySkillsProps) => {
  return (
    <StyledMySkills>
      <TitleSection>My Skills</TitleSection>
      <Paragraph textAlign={"center"} maxWidth={"438px"}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Paragraph>
      <FlexWrapper wrap={"wrap"} gap={"20px"}>
        <Skill iconId={"html5"} />
        <Skill iconId={"css3"} />
        <Skill iconId={"react"} />
        <Skill iconId={"typescript"} />
        <Skill iconId={"styled-components"} />
      </FlexWrapper>
    </StyledMySkills>
  );
};

export const StyledMySkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;
`;
