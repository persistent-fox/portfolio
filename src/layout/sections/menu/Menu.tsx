import { Navigation } from "./navigation/Navigation";
import { S } from "./Menu_Styles";
import React from "react";
import { Icon } from "../../../components/icon/Icon";

interface INavigationProps {
  menuItems: Array<Record<string, string>>;
  onClick: () => void;
}

export const Menu: React.FC<INavigationProps> = ({
  menuItems,
  onClick,
}: INavigationProps) => {
  return (
    <S.Menu>
      <S.ThemeFrame onClick={onClick}>
        <Icon width="30px" height="30px" viewBox="0 0 30 30" iconId="theme" />
      </S.ThemeFrame>
      <Navigation menuItems={menuItems} />
    </S.Menu>
  );
};
