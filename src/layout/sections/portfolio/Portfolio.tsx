import { TitleSection } from "../../../components/TitleSection";
import styled from "styled-components";
import { Project } from "./project/Project";
import srcImg from "./../../../assets/images/projects/proj-1.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";

interface IPortfolioProps {}

export const Portfolio = ({}: IPortfolioProps) => {
  return (
    <StyledPortfolio>
      <TitleSection>Portfolio</TitleSection>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <FlexWrapper justify={"center"} gap={"40px"} wrap={"wrap"}>
        <Project srcImg={srcImg} />
        <Project srcImg={srcImg} />
      </FlexWrapper>
      <FlexWrapper gap={"10px"}>
        <Slide />
        <Slide className={"active"} />
        <Slide />
      </FlexWrapper>
    </StyledPortfolio>
  );
};

export const StyledPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;

  ${TitleSection} + p {
    max-width: 438px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Slide = styled.span`
  width: 14px;
  height: 14px;
  background-color: ${theme.colors.grey.dark};
  border-radius: 50%;
  cursor: pointer;
  &.active {
    width: 30px;
    border-radius: 8px;
    background-image: linear-gradient(
      to right,
      ${theme.colors.secondary},
      ${theme.colors.accent}
    );
  }
`;
