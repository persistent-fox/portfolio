import { ProjectLink } from "../../../../components/project-link/ProjectLink";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/button/Button";
import { TitleCard } from "../../../../components/TitleCard";
import { S } from "./../Portfolio_Styles";
import React from "react";

interface IProjectProps {
  srcImg: string;
  description: string;
  title: string;
  skills: string[];
}

export const Project: React.FC<IProjectProps> = ({
  srcImg,
  description,
  title,
  skills,
}: IProjectProps) => {
  return (
    <S.Project>
      <S.ImageWrapper>
        <img src={srcImg} alt="project" />
        <Button>Live Preview</Button>
      </S.ImageWrapper>
      <S.Info>
        <TitleCard>{title}</TitleCard>
        <p>{description}</p>
        <FlexWrapper as={"ul"} wrap={"wrap"} gap={"10px"}>
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </FlexWrapper>
        <FlexWrapper justify={"space-evenly"} gap={"50px"}>
          <ProjectLink iconId={"clip"} titleLink={"Live Preview"} />
          <ProjectLink iconId={"github"} titleLink={"View Code"} />
        </FlexWrapper>
      </S.Info>
    </S.Project>
  );
};
