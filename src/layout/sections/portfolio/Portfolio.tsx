import { TitleSection } from "../../../components/TitleSection";
import { Project } from "./project/Project";
import srcImg from "./../../../assets/images/projects/proj-1.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Portfolio_Styles";
import { ProjectsData, tabs } from "../../../mock/data";
import React, { useEffect, useState } from "react";
import { TabMenu } from "../../../components/tab-menu/TabMenu";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface IPortfolioProps {}

export const Portfolio: React.FC<IPortfolioProps> = ({}: IPortfolioProps) => {
  const [filter, setFilter] = useState("all");
  const [filtredProjects, setFiltredProjects] = useState(ProjectsData);

  const onClickTabHandler = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {
    setFiltredProjects(ProjectsData.filter((item) => item.status === filter));
    if (filter === "all") {
      setFiltredProjects(ProjectsData);
    }
  }, [filter]);

  return (
    <S.Portfolio>
      <TitleSection>Portfolio</TitleSection>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <TabMenu
        tabs={tabs}
        onClickTabHandler={onClickTabHandler}
        filter={filter}
      />
      <FlexWrapper justify={"center"} gap={"40px"} wrap={"wrap"}>
        {/*<AliceCarousel*/}
        {/*  mouseTracking*/}
        {/*  items={filtredProjects.map((item) => (*/}
        {/*    <Project*/}
        {/*      key={item.id}*/}
        {/*      title={item.title}*/}
        {/*      description={item.description}*/}
        {/*      srcImg={srcImg}*/}
        {/*      skills={item.skills}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*/>*/}

        {filtredProjects.map((item) => (
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
