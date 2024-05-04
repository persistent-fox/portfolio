import styled from "styled-components";
import { Navigation } from "../../../components/navigation/Navigation";
import { NavIcon } from "./nav-icon/NavIcon";
import { theme } from "../../../styles/theme";

interface INavigationProps {
  menuItems: string[];
}

export const Menu = ({ menuItems }: INavigationProps) => {
  return (
    <StyledMenu>
      <NavIcon width="30px" height="30px" viewBox="0 0 30 30" iconId="theme" />
      <Navigation menuItems={menuItems} />
    </StyledMenu>
  );
};

export const StyledMenu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding: 50px 10px;
  background: ${theme.colors.grey.light};
  box-shadow: 4px 0 10px 0 rgba(47, 122, 249, 0.1);
  min-width: 108px;
  height: 100vh;

  a {
    color: ${theme.colors.text.dark};
  }

  @media ${theme.media.large} {
    position: fixed;
    right: 0;
    transform: translateX(100%);
  }
`;
