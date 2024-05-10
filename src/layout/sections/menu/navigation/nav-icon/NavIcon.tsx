import { Icon } from "../../../../../components/icon/Icon";
import { S } from "./../../Menu_Styles";
import React from "react";

interface INavIconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  onClick?: () => void;
  path: string;
}

export const NavIcon: React.FC<INavIconProps> = ({
  iconId,
  width,
  height,
  viewBox,
  path,
}: INavIconProps) => {
  return (
    <S.LinkIcon
      to={path}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <span>{iconId}</span>
      <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
    </S.LinkIcon>
  );
};
