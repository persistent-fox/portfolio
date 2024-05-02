import styled from "styled-components";
import { TitleSection } from "../../../../components/title-section/TitleSection";
import { Paragraph } from "../../../../components/paragraph/Paragraph";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/theme";

interface ISkillProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const Skill = ({ iconId, width, height, viewBox }: ISkillProps) => {
  return (
    <StyledSkill>
      <Frame>
        <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
      </Frame>
      <TitleSection fontSize={"18px"} fontWeight={"600"} as={"h3"}>
        Skill
      </TitleSection>
      <Paragraph>
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

  ${Paragraph} {
    text-align: center;
  }
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.tertiary};
  width: 80px;
  height: 80px;
  margin-bottom: 45px;
  &::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background-image: linear-gradient(
      to right,
      ${theme.colors.secondary},
      ${theme.colors.accent}
    );
    transform: rotate(45deg);
    z-index: -1;
  }
`;
