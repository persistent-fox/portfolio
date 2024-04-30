import styled from "styled-components";
import { TitleSection } from "../../../../components/title-section/TitleSection";
import { Paragraph } from "../../../../components/paragraph/Paragraph";
import { Icon } from "../../../../components/icon/Icon";
import { ThemeStyled } from "../../../../styles/Theme.styled";

interface ISkillProps {
  iconId: string;
}

export const Skill = ({ iconId }: ISkillProps) => {
  return (
    <StyledSkill>
      <Frame>
        <Icon iconId={iconId} />
      </Frame>
      <TitleSection fontSize={"18px"} fontWeight={"600"} as={"h3"}>
        Skill
      </TitleSection>
      <Paragraph textAlign={"center"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim
      </Paragraph>
    </StyledSkill>
  );
};

export const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
  max-width: 300px;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-image: linear-gradient(
    to right,
    ${ThemeStyled.colors.secondary},
    ${ThemeStyled.colors.accent}
  );
  margin-bottom: 35px;
`;
