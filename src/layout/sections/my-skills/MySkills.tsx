import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";

interface IMySkillsProps {}

export const MySkills = ({}: IMySkillsProps) => {
  return (
    <StyledMySkills>
      <TitleSection>My Skills</TitleSection>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <FlexWrapper
        align={"flex-start"}
        justify={"space-between"}
        wrap={"wrap"}
        gap={"20px"}
      >
        <Skill iconId={"html5"} />
        <Skill iconId={"css3"} />
        <Skill iconId={"react"} />
        <Skill iconId={"typescript"} />
        <Skill iconId={"styled-components"} />
        <Skill viewBox={"0 0 92 92"} iconId={"git"} />
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

  p {
    text-align: center;
    max-width: 438px;
    margin-bottom: 20px;
  }
`;
