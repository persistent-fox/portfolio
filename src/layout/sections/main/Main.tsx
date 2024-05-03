import { Button } from "../../../components/button/Button";
import styled from "styled-components";
import srcImg from "./../../../assets/images/photo.webp";
import { theme } from "../../../styles/theme";

interface IMainProps {}

export const Main = ({}: IMainProps) => {
  return (
    <StyledMain>
      <Information>
        <Name>I’m Margarita Abdullina</Name>
        <Title>
          <Highlighted>Front-end</Highlighted> Developer
        </Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
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
  background: ${theme.colors.primary}
    url("./../../../assets/images/background.svg") no-repeat center center /
    cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 58px 0 58px;
  flex-wrap: wrap;
  img {
    max-width: 344px;
    width: 100%;
  }
  p {
    margin-bottom: 25px;
  }

  @media ${theme.media.large} {
    padding: 80px 40px 0 40px;
    gap: 20px;
  }
`;

export const Information = styled.div`
  max-width: 700px;
  width: 100%;
`;

export const Name = styled.span`
  display: block;
  color: ${theme.colors.text.tertiary};
  font-size: calc((100vw - 375px) / (1440 - 375) * (48 - 40) + 40px);
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: calc((100vw - 375px) / (1440 - 375) * (48 - 40) + 40px);
  margin-bottom: 18px;
  color: ${theme.colors.text.tertiary};
`;

export const Highlighted = styled.span`
  background-image: linear-gradient(
    to right,
    ${theme.colors.secondary},
    ${theme.colors.accent}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
