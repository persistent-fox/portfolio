import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledButton } from "../../../components/button/Button";

// Project

const Project = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0 60px 0 60px;

  img {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
  }

  li {
    border-radius: 4px;
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.accent}
    );
    padding: 4px 8px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: 600;
    line-height: 1;
  }

  @media ${(props) => props.theme.media.small} {
    min-width: 320px;
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  padding: 25px;
  p {
    flex-grow: 1;
    text-align: justify;
  }

  p + ${FlexWrapper} {
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-top-right-radius: 60px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: 0.3s all;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${StyledButton} {
      transition: 0.3s all;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  ${StyledButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
  }

  @media ${(props) => props.theme.media.medium} {
    &::before {
      opacity: 1;
    }
    ${StyledButton} {
      visibility: visible;
    }
  }
`;

// Portfolio

const Portfolio = styled.section`
  position: relative;
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

export const S = {
  Portfolio,
  ImageWrapper,
  Project,
  Info,
};
