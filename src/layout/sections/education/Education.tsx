import { TitleSection } from "../../../components/title-section/TitleSection";
import { Paragraph } from "../../../components/paragraph/Paragraph";
import styled from "styled-components";
import { TimeLineCard } from "../../../components/time-line-card/TimeLineCard";
import { Divider } from "../../../components/devider/Divider";
import { education } from "../../../mock/data";
import { Fragment } from "react";
import { ThemeStyled } from "../../../styles/Theme.styled";

interface IEducationProps {}

export const Education = ({}: IEducationProps) => {
  return (
    <StyledEducation>
      <TitleSection>Education</TitleSection>
      <Paragraph>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Paragraph>
      <Info>
        {education.map((item, index) => (
          <Fragment key={item.key}>
            <TimeLineCard {...item} />
            {index !== education.length - 1 && <Divider />}
          </Fragment>
        ))}
      </Info>
    </StyledEducation>
  );
};

export const StyledEducation = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;
  ${Paragraph} {
    text-align: justify;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 40px 30px;
  background-color: ${ThemeStyled.colors.primary};
`;
