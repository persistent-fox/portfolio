import styled from "styled-components";
import { NavIcon } from "../nav-icon/NavIcon";

interface INavigationProps {
  menuItems: string[];
}

export const Navigation = ({ menuItems }: INavigationProps) => {
  return (
    <StyledMenu>
      <ul role={"menu"}>
        {menuItems.map((item) => (
          <li role={"menuitem"} key={item}>
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
    gap: 40px;
  }
`;
