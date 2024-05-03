import styled from "styled-components";
import { theme } from "../../styles/theme";
import { TitleCard } from "../TitleCard";

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
        <TitleCard>{placeName}</TitleCard>
        <Place>
          <span>{jobTitle}</span>
          <span>{date}</span>
        </Place>
      </div>
      <Description>
        <TitleCard>{title}</TitleCard>
        <p>{description}</p>
      </Description>
    </StyledTimeLineCard>
  );
};

export const StyledTimeLineCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  ${TitleCard} {
    margin-bottom: 25px;
  }
  .wrapper {
    flex: 1;
    min-width: 200px;
  }
  p {
    text-align: justify;
  }
`;

export const Place = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  max-width: fit-content;
  &:first-child {
    color: ${theme.colors.text.tertiary};
    font-kerning: none;
    font-feature-settings: "calt" off;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }

  &:last-child {
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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  min-width: 210px;
`;
