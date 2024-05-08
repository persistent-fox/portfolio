import { TitleSection } from "../../../components/TitleSection";
import { Project } from "./project/Project";
import srcImg from "./../../../assets/images/projects/proj-1.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Portfolio_Styles";
import { ProjectsData } from "../../../mock/data";
import React from "react";

interface IPortfolioProps {}

export const Portfolio: React.FC<IPortfolioProps> = ({}: IPortfolioProps) => {
  return (
    <S.Portfolio>
      <TitleSection>Portfolio</TitleSection>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <FlexWrapper justify={"center"} gap={"40px"} wrap={"wrap"}>
        {ProjectsData.map((item) => (
          <Project
            key={item.id}
            title={item.title}
            description={item.description}
            srcImg={srcImg}
            skills={item.skills}
          />
        ))}
      </FlexWrapper>
      <FlexWrapper gap={"10px"}>
        <S.Slide />
        <S.Slide className={"active"} />
        <S.Slide />
      </FlexWrapper>
    </S.Portfolio>
  );
};
