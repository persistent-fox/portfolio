import styled from "styled-components";
import { NavIcon } from "../../layout/sections/menu/nav-panel/nav-icon/NavIcon";

interface INavigationProps {
  menuItems: string[];
  onClick?: () => void;
}

export const Navigation = ({ menuItems, onClick }: INavigationProps) => {
  return (
    <StyledMenu>
      <ul role={"menu"}>
        {menuItems.map((item) => (
          <li onClick={onClick} role={"menuitem"} key={item}>
            <NavIcon width="18" height="18" viewBox="0 0 18 18" iconId={item} />
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 44px;
  }
`;
