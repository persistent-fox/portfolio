import { TitleSection } from "../../../components/TitleSection";
import { Project } from "./project/Project";
import srcImg from "./../../../assets/images/projects/proj-1.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Portfolio_Styles";
import { ProjectsData, tabs } from "../../../mock/data";
import React, { useEffect, useState } from "react";
import { TabMenu } from "../../../components/tab-menu/TabMenu";
import "react-alice-carousel/lib/alice-carousel.css";
import { AnimatePresence, motion } from "framer-motion";

export const Portfolio: React.FC<IPortfolioProps> = () => {
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
        <AnimatePresence>
          {filtredProjects.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ width: "45%", minWidth: "380px" }}
              key={item.id}
            >
              <Project
                key={item.id}
                title={item.title}
                description={item.description}
                srcImg={srcImg}
                skills={item.skills}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </FlexWrapper>
    </S.Portfolio>
  );
};
