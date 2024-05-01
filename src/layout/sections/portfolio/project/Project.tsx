import { TitleSection } from "../../../../components/title-section/TitleSection";
import { Paragraph } from "../../../../components/paragraph/Paragraph";
import styled from "styled-components";
import { ProjectLink } from "../../../../components/project-link/ProjectLink";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ThemeStyled } from "../../../../styles/Theme.styled";

interface IProjectProps {
  srcImg: string;
}

export const Project = ({ srcImg }: IProjectProps) => {
  return (
    <StyledProject>
      <img src={srcImg} alt="project" />
      <Info>
        <TitleSection fontWeight={"500"} fontSize={"18px"} as={"h3"}>
          Project Tile goes here
        </TitleSection>
        <Paragraph>
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content.
        </Paragraph>
        <FlexWrapper as={"ul"} wrap={"wrap"} gap={"10px"}>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>SASS</li>
          <li>React</li>
        </FlexWrapper>
        <FlexWrapper justify={"space-evenly"} gap={"50px"}>
          <ProjectLink iconId={"clip"} titleLink={"Live Preview"} />
          <ProjectLink iconId={"github"} titleLink={"View Code"} />
        </FlexWrapper>
      </Info>
    </StyledProject>
  );
};

export const StyledProject = styled.article`
  width: 45%;
  min-width: 340px;
  background-color: ${ThemeStyled.colors.primary};
  border-radius: 0 60px 0 60px;

  img {
    width: 100%;
    height: 260px;
    border-top-right-radius: 60px;
    object-fit: cover;
  }

  li {
    border-radius: 4px;
    background-image: linear-gradient(
      to right,
      ${ThemeStyled.colors.secondary},
      ${ThemeStyled.colors.accent}
    );
    padding: 4px 8px;
    font-size: 16px;
    color: ${ThemeStyled.colors.tertiary};
    font-weight: 600;
    line-height: 1;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;
