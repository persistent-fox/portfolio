import { Navigation } from "../../../../components/navigation/Navigation";
import { NavIcon } from "../../../../components/navigation/nav-icon/NavIcon";
import { S } from "./../Menu_Styles";
import React from "react";

interface INavigationProps {
  menuItems: string[];
  onClick: () => void;
  isOpen: boolean;
}

export const NavPanel: React.FC<INavigationProps> = ({
  menuItems,
  onClick,
  isOpen = false,
}: INavigationProps) => {
  return (
    <S.NavPanel isOpen={isOpen}>
      <NavIcon width="30px" height="30px" viewBox="0 0 30 30" iconId="theme" />
      <Navigation onClick={onClick} menuItems={menuItems} />
    </S.NavPanel>
  );
};
