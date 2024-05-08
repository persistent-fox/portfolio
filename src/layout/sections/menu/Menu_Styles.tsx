import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

// NavPanel

type NavPanelProps = {
  isOpen: boolean;
};

const NavPanel = styled.aside<NavPanelProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding: 50px 10px;
  background: ${theme.colors.grey.light};
  box-shadow: 4px 0 10px 0 rgba(47, 122, 249, 0.1);
  min-width: 108px;
  max-width: 108px;
  height: 100vh;

  a {
    color: ${theme.colors.text.dark};
  }

  @media ${theme.media.large} {
    position: fixed;
    right: 0;
    transform: translateX(100%);
    z-index: 10;
    ${(props) =>
      props.isOpen &&
      css`
        transform: translateX(0);
      `}
  }
`;

// Burger

const Burger = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 20px;
  left: 45px;
  width: 35px;
  height: 35px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  color: ${theme.colors.tertiary};
  background-image: linear-gradient(
    to right,
    ${theme.colors.secondary},
    ${theme.colors.accent}
  );
  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: ${theme.colors.tertiary};
    z-index: 1;
    ${(props) =>
      props.isOpen &&
      css`
        background-color: rgba(255, 255, 255, 0);
      `}
    &:before {
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      background-color: ${theme.colors.tertiary};
      transform: translateY(6px);
      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &:after {
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      background-color: ${theme.colors.tertiary};
      transform: translateY(-6px);
      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(45deg) translateY(-2px);
        `}
    }
  }
`;

const NavArrow = styled.div`
  position: fixed;
  top: 20px;
  right: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: ${theme.colors.tertiary};
  background-image: linear-gradient(
    to right,
    ${theme.colors.secondary},
    ${theme.colors.accent}
  );
  cursor: pointer;
`;

export const S = {
  NavPanel,
  Burger,
  NavArrow,
};
