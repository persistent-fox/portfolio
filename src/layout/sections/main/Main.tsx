import { Button } from "../../../components/button/Button";
import styled from "styled-components";
import { TitleSection } from "../../../components/title-section/TitleSection";
import { Paragraph } from "../../../components/paragraph/Paragraph";

interface IMainProps {}

export const Main = ({}: IMainProps) => {
  return (
    <StyledMain>
      <Name>I’m Rayan Adlrdard</Name>
      <TitleSection fontSize="48px" as="h1">
        <Highlighted>Front-end</Highlighted> Developer
      </TitleSection>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
        feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
        lectus.
      </Paragraph>
      <Button
        primary
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        iconId="arrow-follow"
      >
        Hire me
      </Button>
    </StyledMain>
  );
};

export const StyledMain = styled.section`
  padding: 8px 58px 0 58px;
`;

export const Name = styled.span`
  color: #2b2b2b;
  font-size: 48px;
  font-weight: 700;
  line-height: 123.6%;
`;

export const Highlighted = styled.span`
  color: #ffb400;
`;
