import { TitleSection } from "../../../components/title-section/TitleSection";
import { Paragraph } from "../../../components/paragraph/Paragraph";
import { workHistory } from "../../../mock/data";
import { TimeLineCard } from "../../../components/time-line-card/TimeLineCard";
import { Divider } from "../../../components/devider/Divider";
import styled from "styled-components";
import { Fragment } from "react";
import { ThemeStyled } from "../../../styles/Theme.styled";

interface IWorkHistoryProps {}

export const WorkHistory = ({}: IWorkHistoryProps) => {
  return (
    <StyledWorkHistory>
      <TitleSection>Work History</TitleSection>
      <Paragraph textAlign={"center"} maxWidth={"438px"}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Paragraph>
      <div className="info">
        {workHistory.map((item) => (
          <Fragment key={item.key}>
            <TimeLineCard {...item} />
            <Divider />
          </Fragment>
        ))}
      </div>
    </StyledWorkHistory>
  );
};

export const StyledWorkHistory = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;
  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 30px;
    background-color: ${ThemeStyled.colors.primary};
  }
`;
