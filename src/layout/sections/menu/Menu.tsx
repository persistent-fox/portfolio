import styled from "styled-components";
import { Navigation } from "../../../components/navigation/Navigation";
import { NavIcon } from "../../../components/nav-icon/NavIcon";
import { menuItems } from "../../../mock/data";
import { ThemeStyled } from "../../../styles/Theme.styled";

interface INavigationProps {
  menuItems: string[];
}

export const Menu = ({ menuItems }: INavigationProps) => {
  return (
    <StyledMenu>
      <NavIcon
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        iconId="moon-theme-icon"
      />
      <Navigation menuItems={menuItems} />
    </StyledMenu>
  );
};

export const StyledMenu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
  background: ${ThemeStyled.colors.grey.light};
  box-shadow: 4px 0 10px 0 rgba(47, 122, 249, 0.1);
  max-width: 108px;
  min-height: 100vh;

  a {
    color: ${ThemeStyled.colors.text.dark};
  }
`;
