import styled from "styled-components";
import { ProjectLink } from "../../../../components/project-link/ProjectLink";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/theme";
import { Button, StyledButton } from "../../../../components/button/Button";
import { TitleCard } from "../../../../components/TitleCard";

interface IProjectProps {
  srcImg: string;
}

export const Project = ({ srcImg }: IProjectProps) => {
  return (
    <StyledProject>
      <ImageWrapper>
        <img src={srcImg} alt="project" />
        <Button>Live Preview</Button>
      </ImageWrapper>
      <Info>
        <TitleCard>Project Tile goes here</TitleCard>
        <p>
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content.
        </p>
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
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 380px;
  background-color: ${theme.colors.primary};
  border-radius: 0 60px 0 60px;

  img {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
  }

  li {
    border-radius: 4px;
    background-image: linear-gradient(
      to right,
      ${theme.colors.secondary},
      ${theme.colors.accent}
    );
    padding: 4px 8px;
    font-size: 16px;
    color: ${theme.colors.tertiary};
    font-weight: 600;
    line-height: 1;
  }

  @media ${theme.media.small} {
    min-width: 320px;
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  padding: 25px;
  p {
    flex-grow: 1;
    text-align: justify;
  }

  p + ${FlexWrapper} {
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-top-right-radius: 60px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${StyledButton} {
      visibility: visible;
    }
  }

  ${StyledButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
  }

  @media ${theme.media.medium} {
    &::before {
      opacity: 1;
    }
    ${StyledButton} {
      visibility: visible;
    }
  }
`;
