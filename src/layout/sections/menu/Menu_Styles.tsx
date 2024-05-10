import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Menu

type MenuProps = {};

const Menu = styled.aside<MenuProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  flex-grow: 1;
  padding: 50px 10px;
  background: ${(props) => props.theme.colors.grey.light};
  box-shadow: 4px 0 10px 0 rgba(47, 122, 249, 0.1);
  max-width: 108px;
  width: 100%;
  height: 100vh;

  a {
    color: ${(props) => props.theme.colors.text.dark};
  }

  @media ${(props) => props.theme.media.large} {
    position: fixed;
    bottom: 0;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    width: 100%;
    height: 80px;
    padding: 20px 15px;
    max-width: none;
  }
`;

const ThemeFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.grey.medium};
  transition: color 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.text.dark};
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.accent}
    );
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

// Menu navigation

const Navigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 44px;
  }
  @media ${(props) => props.theme.media.large} {
    ul {
      flex-direction: row;
      gap: 10px;
    }
  }
`;

// Navigation icon

type LinkIconProps = {
  social?: boolean;
};

const LinkIcon = styled(NavLink)<LinkIconProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.grey.medium};
  transition: color 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.text.dark};

  span {
    position: absolute;
    display: inline-block;
    padding: 5px 15px;
    left: 50%;
    top: -38px;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    visibility: hidden;
    color: ${(props) => props.theme.colors.text.tertiary};
    background: ${(props) => props.theme.colors.grey.medium};
    border-radius: 5px;
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px;
      border-style: solid;
      border-color: ${(props) => props.theme.colors.grey.medium} transparent
        transparent transparent;
    }
  }

  &.active {
    color: ${(props) => props.theme.colors.tertiary};
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.accent}
    );
  }

  @media ${(props) => props.theme.media.hover} {
    &:hover {
      color: ${(props) => props.theme.colors.tertiary};
      background-image: linear-gradient(
        to right,
        ${(props) => props.theme.colors.secondary},
        ${(props) => props.theme.colors.accent}
      );
      span {
        visibility: visible;
      }
    }
  }

  @media ${(props) => props.theme.media.small} {
    width: 30px;
    height: 30px;
  }
`;

export const S = {
  Menu,
  Navigation,
  LinkIcon,
  ThemeFrame,
};
