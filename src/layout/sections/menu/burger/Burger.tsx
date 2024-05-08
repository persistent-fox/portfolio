import React from "react";
import { S } from "./../Menu_Styles";

interface IBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Burger: React.FC<IBurgerProps> = ({
  isOpen,
  onClick,
}: IBurgerProps) => {
  return (
    <S.Burger onClick={onClick} isOpen={isOpen}>
      <span></span>
    </S.Burger>
  );
};
