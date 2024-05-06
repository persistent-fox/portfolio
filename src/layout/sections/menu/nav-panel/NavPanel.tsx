import styled, { css } from "styled-components";
import { Navigation } from "../../../../components/navigation/Navigation";
import { NavIcon } from "./nav-icon/NavIcon";
import { theme } from "../../../../styles/theme";
import { log } from "util";

interface INavigationProps {
  menuItems: string[];
  onClick: () => void;
  isOpen: boolean;
}

export const NavPanel = ({
  menuItems,
  onClick,
  isOpen = false,
}: INavigationProps) => {
  return (
    <StyledMenu isOpen={isOpen}>
      <NavIcon width="30px" height="30px" viewBox="0 0 30 30" iconId="theme" />
      <Navigation onClick={onClick} menuItems={menuItems} />
    </StyledMenu>
  );
};

type LayoutProps = {
  isOpen: boolean;
};

export const StyledMenu = styled.aside<LayoutProps>`
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
