import { TitleSection } from "../../../components/TitleSection";
import { workHistory } from "../../../mock/data";
import { TimeLineCard } from "../../../components/time-line-card/TimeLineCard";
import { Divider } from "../../../components/Divider";
import styled from "styled-components";
import { Fragment } from "react";
import { theme } from "../../../styles/theme";

interface IWorkHistoryProps {}

export const WorkHistory = ({}: IWorkHistoryProps) => {
  return (
    <StyledWorkHistory>
      <TitleSection>Work History</TitleSection>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <Info>
        {workHistory.map((item, index) => (
          <Fragment key={item.key}>
            <TimeLineCard {...item} />
            {index !== workHistory.length - 1 && <Divider />}
          </Fragment>
        ))}
      </Info>
    </StyledWorkHistory>
  );
};

export const StyledWorkHistory = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;
  & > p {
    max-width: 438px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 40px 20px;
  background-color: ${theme.colors.primary};
`;
