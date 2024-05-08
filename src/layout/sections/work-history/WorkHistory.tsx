import { TitleSection } from "../../../components/TitleSection";
import { workHistory } from "../../../mock/data";
import { TimeLineCard } from "../../../components/time-line-card/TimeLineCard";
import { Divider } from "../../../components/Divider";
import React, { Fragment } from "react";
import { S } from "./WorkHistory_Styles";

interface IWorkHistoryProps {}

export const WorkHistory: React.FC<
  IWorkHistoryProps
> = ({}: IWorkHistoryProps) => {
  return (
    <S.WorkHistory>
      <TitleSection>Work History</TitleSection>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <S.Info>
        {workHistory.map((item, index) => (
          <Fragment key={item.key}>
            <TimeLineCard {...item} />
            {index !== workHistory.length - 1 && <Divider />}
          </Fragment>
        ))}
      </S.Info>
    </S.WorkHistory>
  );
};
