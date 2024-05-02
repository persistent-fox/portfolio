import { TitleSection } from "../title-section/TitleSection";
import { Paragraph } from "../paragraph/Paragraph";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ITimeLineCardProps {
  date: string;
  placeName: string;
  description: string;
  jobTitle: string;
  title: string;
}

export const TimeLineCard = ({
  date,
  description,
  placeName,
  jobTitle,
  title,
}: ITimeLineCardProps) => {
  return (
    <StyledTimeLineCard>
      <div className="wrapper">
        <TitleSection fontSize={"18px"}>{placeName}</TitleSection>
        <Place>
          <span className="job-title">{jobTitle}</span>
          <span className="date">{date}</span>
        </Place>
      </div>
      <div className="description">
        <TitleSection fontSize={"18px"} fontWeight={"500"} as={"h3"}>
          {title}
        </TitleSection>
        <Paragraph>{description}</Paragraph>
      </div>
    </StyledTimeLineCard>
  );
};

export const StyledTimeLineCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  ${TitleSection} {
    margin-bottom: 25px;
  }
  .wrapper {
    flex: 1;
    min-width: 200px;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 25px;
    flex: 2;
    min-width: 320px;
  }
  ${Paragraph} {
    text-align: justify;
  }
`;

export const Place = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  .job-title {
    color: ${theme.colors.text.tertiary};
    font-kerning: none;
    font-feature-settings: "calt" off;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }

  .date {
    color: ${theme.colors.tertiary};
    font-size: 10px;
    font-weight: 400;
    line-height: 100%;
    padding: 4px 8px;
    border-radius: 1px;
    background-image: linear-gradient(
      to right,
      ${theme.colors.secondary},
      ${theme.colors.accent}
    );
  }
`;
