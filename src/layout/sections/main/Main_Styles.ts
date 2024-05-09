import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { font } from "../../../styles/Common";

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
  margin-bottom: 10px;
  ${font({
    color: theme.colors.text.tertiary,
    weight: 700,
    Fmin: 40,
    Fmax: 48,
  })}
`;

const Title = styled.h1`
  margin-bottom: 18px;
  ${font({
    color: theme.colors.text.tertiary,
    weight: 700,
    Fmin: 40,
    Fmax: 48,
  })}
  span {
    visibility: hidden;
  }
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
