import { TitleSection } from "../../../components/title-section/TitleSection";
import { Paragraph } from "../../../components/paragraph/Paragraph";
import styled from "styled-components";
import { Project } from "./project/Project";
import srcImg from "./../../../assets/images/projects/proj-1.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ThemeStyled } from "../../../styles/Theme.styled";

interface IPortfolioProps {}

export const Portfolio = ({}: IPortfolioProps) => {
  return (
    <StyledPortfolio>
      <TitleSection>Portfolio</TitleSection>
      <Paragraph maxWidth={"438px"}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Paragraph>
      <FlexWrapper justify={"center"} gap={"20px"} wrap={"wrap"}>
        <Project srcImg={srcImg} />
        <Project srcImg={srcImg} />
      </FlexWrapper>
      <FlexWrapper gap={"10px"} style={{ marginTop: "5px" }}>
        <Slide />
        <Slide />
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
`;

export const Slide = styled.span`
  width: 14px;
  height: 14px;
  background-image: linear-gradient(
    to right,
    ${ThemeStyled.colors.secondary},
    ${ThemeStyled.colors.accent}
  );
  border-radius: 50%;
`;
