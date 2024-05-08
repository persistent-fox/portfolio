import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledButton } from "../../../components/button/Button";

// Project

const Project = styled.article`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 380px;
  background-color: ${theme.colors.primary};
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
      ${theme.colors.secondary},
      ${theme.colors.accent}
    );
    padding: 4px 8px;
    font-size: 16px;
    color: ${theme.colors.tertiary};
    font-weight: 600;
    line-height: 1;
  }

  @media ${theme.media.small} {
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
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${StyledButton} {
      visibility: visible;
    }
  }

  ${StyledButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
  }

  @media ${theme.media.medium} {
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

const Slide = styled.span`
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

export const S = {
  Portfolio,
  Slide,
  ImageWrapper,
  Project,
  Info,
};
