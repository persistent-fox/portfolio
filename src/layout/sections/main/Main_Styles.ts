import styled from "styled-components";
import { font } from "../../../styles/Common";

const Main = styled.section`
  position: relative;
  background: ${(props) => props.theme.colors.primary}
    url("./../../../assets/images/background.png") no-repeat center center /
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

  @media ${(props) => props.theme.media.large} {
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
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text.tertiary};
  ${font({
    weight: 700,
    Fmin: 40,
    Fmax: 48,
  })};
`;

const Title = styled.h1`
  margin-bottom: 18px;
  ${font({
    weight: 700,
    Fmin: 40,
    Fmax: 48,
  })};
  color: ${(props) => props.theme.colors.text.tertiary};
`;

const Highlighted = styled.span`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.accent}
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
