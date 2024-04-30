import styled, { css } from "styled-components";
import React from "react";
import { Icon } from "../icon/Icon";
import { ThemeStyled } from "../../styles/Theme.styled";

interface IButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  width?: string;
  height?: string;
  viewBox?: string;
  iconId?: string;
  color?: string;
  fontWeight?: string;
}

export const Button = ({
  children,
  primary,
  width,
  height,
  viewBox,
  iconId,
  color,
  fontWeight,
}: IButtonProps) => {
  return (
    <StyledButton fontWeight={fontWeight} color={color} primary={primary}>
      {children}
      {iconId && (
        <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
      )}
    </StyledButton>
  );
};

type StyledButtonProps = {
  primary?: boolean;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  padding: 10px 30px;
  color: ${(props) => props.color || ThemeStyled.colors.tertiary};
  background-image: linear-gradient(
    to right,
    ${ThemeStyled.colors.secondary},
    ${ThemeStyled.colors.accent}
  );
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: scale(0.95);
  }

  // primary button
  ${(props) =>
    props.primary &&
    css<StyledButtonProps>`
      color: ${(props) => props.color || ThemeStyled.colors.tertiary};
      font-size: ${(props) => props.fontSize || "16px"};
      font-weight: ${(props) => props.fontWeight || "500"};
      padding: 16px 32px;
      border-radius: 5px;
      text-transform: uppercase;
    `}
`;
