import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { MySkillsData } from "../../../mock/data";
import { S } from "./MySkills_Styles";
import { Fade } from "react-awesome-reveal";

interface IMySkillsProps {}

export const MySkills = ({}: IMySkillsProps) => {
  return (
    <S.MySkills>
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
        {MySkillsData.map((item) => (
          <Fade key={item.iconId} cascade={true} damping={0.2}>
            <Skill
              key={item.iconId}
              title={item.title}
              description={item.description}
              iconId={item.iconId}
              viewBox={item.viewBox}
            />
          </Fade>
        ))}
      </FlexWrapper>
    </S.MySkills>
  );
};
