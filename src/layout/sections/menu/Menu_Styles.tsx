import styled from "styled-components";
import { theme } from "../../../styles/theme";

// Menu

type MenuProps = {};

const Menu = styled.aside<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  flex-grow: 1;
  padding: 50px 10px;
  background: ${theme.colors.grey.light};
  box-shadow: 4px 0 10px 0 rgba(47, 122, 249, 0.1);
  max-width: 108px;
  width: 100%;
  height: 100vh;

  a {
    color: ${theme.colors.text.dark};
  }

  @media ${theme.media.large} {
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

// Menu navigation

const Navigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 44px;
  }
  @media ${theme.media.large} {
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

const LinkIcon = styled.a<LinkIconProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.grey.medium};
  transition: color 0.3s ease-in-out;
  color: ${theme.colors.text.dark};

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
    color: ${theme.colors.text.tertiary};
    background: ${theme.colors.grey.medium};
    border-radius: 5px;
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px;
      border-style: solid;
      border-color: ${theme.colors.grey.medium} transparent transparent
        transparent;
    }
  }

  &:hover {
    color: ${theme.colors.tertiary};
    background-image: linear-gradient(
      to right,
      ${theme.colors.secondary},
      ${theme.colors.accent}
    );
    span {
      visibility: visible;
    }
  }

  @media ${theme.media.small} {
    width: 30px;
    height: 30px;
  }
`;

export const S = {
  Menu,
  Navigation,
  LinkIcon,
};
