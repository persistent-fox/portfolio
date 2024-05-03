import styled, { css } from "styled-components";
import { theme } from "../../../../styles/theme";

interface IBurgerProps {
  isOpenNav: boolean;
}

export const Burger = ({ isOpenNav }: IBurgerProps) => {
  return (
    <StyledBurger isOpenNav={isOpenNav}>
      <span></span>
    </StyledBurger>
  );
};

const StyledBurger = styled.div<{ isOpenNav: boolean }>`
  visibility: hidden;
  cursor: pointer;
  span {
    position: absolute;
    display: block;
    top: 30px;
    right: 50px;
    width: 30px;
    height: 2px;
    background-color: ${theme.colors.accent};
    z-index: 1;
    ${(props) =>
      props.isOpenNav &&
      css`
        background-color: rgba(255, 255, 255, 0);
      `}
    &:before {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.accent};
      transform: translateY(10px);
      ${(props) =>
        props.isOpenNav &&
        css`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &:after {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.accent};
      transform: translateY(-10px);
      ${(props) =>
        props.isOpenNav &&
        css`
          transform: rotate(45deg) translateY(-2px);
        `}
    }
  }

  @media ${theme.media.large} {
    visibility: visible;
  }
`;
