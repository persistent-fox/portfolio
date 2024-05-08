import { Navigation } from "./navigation/Navigation";
import { NavIcon } from "./navigation/nav-icon/NavIcon";
import { S } from "./Menu_Styles";
import React from "react";

interface INavigationProps {
  menuItems: string[];
}

export const Menu: React.FC<INavigationProps> = ({
  menuItems,
}: INavigationProps) => {
  return (
    <S.Menu>
      <NavIcon width="30px" height="30px" viewBox="0 0 30 30" iconId="theme" />
      <Navigation menuItems={menuItems} />
    </S.Menu>
  );
};
