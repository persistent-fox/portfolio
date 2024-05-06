import styled, { css } from "styled-components";

export const MobileMenu = styled.div``;

type LayoutProps = {
  isOpen: boolean;
};

export const Layout = styled.div<LayoutProps>`
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

export const S = {
  MobileMenu,
  Layout,
};
