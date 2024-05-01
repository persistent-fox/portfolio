import { Button } from "../../../components/button/Button";
import styled from "styled-components";
import { TitleSection } from "../../../components/title-section/TitleSection";
import { Paragraph } from "../../../components/paragraph/Paragraph";
import srcImg from "./../../../assets/images/photo.webp";
import { ThemeStyled } from "../../../styles/Theme.styled";

interface IMainProps {}

export const Main = ({}: IMainProps) => {
  return (
    <StyledMain>
      <Information>
        <Name>I’m Rayan Adlrdard</Name>
        <TitleSection mb={"18px"} fontSize="48px" as="h1">
          <Highlighted>Front-end</Highlighted> Developer
        </TitleSection>
        <Paragraph mb={"25px"}>
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
      </Information>
      <img src={srcImg} alt="photo" />
    </StyledMain>
  );
};

export const StyledMain = styled.section`
  position: relative;
  min-height: 468px;
  background-color: ${ThemeStyled.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 58px 0 58px;
  flex-wrap: wrap;
  img {
    height: 100%;
  }
`;

export const Information = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const Name = styled.span`
  display: block;
  color: ${ThemeStyled.colors.text.tertiary};
  font-size: 48px;
  font-weight: 700;
  line-height: 123.6%;
`;

export const Highlighted = styled.span`
  background-image: linear-gradient(
    to right,
    ${ThemeStyled.colors.secondary},
    ${ThemeStyled.colors.accent}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
