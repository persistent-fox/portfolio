import { NavIcon } from "./nav-icon/NavIcon";
import { S } from "./../Menu_Styles";
import React from "react";

interface INavigationProps {
  menuItems: string[];
  onClick?: () => void;
}

export const Navigation: React.FC<INavigationProps> = ({
  menuItems,
  onClick,
}: INavigationProps) => {
  return (
    <S.Navigation>
      <ul role={"menu"}>
        {menuItems.map((item) => (
          <li onClick={onClick} role={"menuitem"} key={item}>
            <NavIcon width="18" height="18" viewBox="0 0 18 18" iconId={item} />
          </li>
        ))}
      </ul>
    </S.Navigation>
  );
};
