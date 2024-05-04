import { Burger } from "../../layout/sections/menu/burger/Burger";
import { Navigation } from "../navigation/Navigation";
import { menuItems } from "../../mock/data";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { NavIcon } from "../../layout/sections/menu/nav-icon/NavIcon";

interface IMobileMenuProps {}

export const MobileMenu = ({}: IMobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledMobileMenu>
      <Burger onClick={onClick} isOpen={isOpen} />
      <Layout isOpen={isOpen} onClick={onClick}></Layout>
      <StyledMenu isOpen={isOpen}>
        <NavIcon
          width="30px"
          height="30px"
          viewBox="0 0 30 30"
          iconId="theme"
        />
        <Navigation onClick={onClick} menuItems={menuItems} />
      </StyledMenu>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.div``;

type LayoutProps = {
  isOpen: boolean;
};

const Layout = styled.div<LayoutProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 5;
  transform: translateX(100%);
  transition: background-color 0.5s;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
      background-color: rgba(0, 0, 0, 0.7);
    `}
`;

const StyledMenu = styled.aside<LayoutProps>`
  position: fixed;
  right: 0;
  z-index: 10;
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
  transform: translateX(100%);
  transition: all 0.3s;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
  a {
    color: ${theme.colors.text.dark};
  }
`;
