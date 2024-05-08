import { Icon } from "../../../../../components/icon/Icon";
import { S } from "./../../Menu_Styles";
import React from "react";

interface INavIconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  onClick?: () => void;
}

export const NavIcon: React.FC<INavIconProps> = ({
  iconId,
  width,
  height,
  viewBox,
}: INavIconProps) => {
  return (
    <S.LinkIcon>
      <span>{iconId}</span>
      <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
    </S.LinkIcon>
  );
};
