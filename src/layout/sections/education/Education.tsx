import { TitleSection } from "../../../components/TitleSection";
import { TimeLineCard } from "../../../components/time-line-card/TimeLineCard";
import { Divider } from "../../../components/Divider";
import { education } from "../../../mock/data";
import React, { Fragment } from "react";
import { S } from "./Education_Styles";

interface IEducationProps {}

export const Education: React.FC = ({}: IEducationProps) => {
  return (
    <S.Education>
      <TitleSection>Education</TitleSection>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <S.Info>
        {education.map((item, index) => (
          <Fragment key={item.key}>
            <TimeLineCard {...item} />
            {index !== education.length - 1 && <Divider />}
          </Fragment>
        ))}
      </S.Info>
    </S.Education>
  );
};
