import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Main = styled.section`
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

const Information = styled.div`
  max-width: 700px;
  width: 100%;
`;

const Name = styled.span`
  display: block;
  color: ${theme.colors.text.tertiary};
  font-size: calc((100vw - 375px) / (1440 - 375) * (48 - 40) + 40px);
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: calc((100vw - 375px) / (1440 - 375) * (48 - 40) + 40px);
  margin-bottom: 18px;
  color: ${theme.colors.text.tertiary};
`;

const Highlighted = styled.span`
  background-image: linear-gradient(
    to right,
    ${theme.colors.secondary},
    ${theme.colors.accent}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const S = {
  Main,
  Information,
  Name,
  Title,
  Highlighted,
};
