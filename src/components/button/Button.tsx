import styled, { css } from "styled-components";
import React from "react";
import { Icon } from "../icon/Icon";

interface IButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  width?: string;
  height?: string;
  viewBox?: string;
  iconId?: string;
  color?: string;
}

export const Button = ({
  children,
  primary,
  width,
  height,
  viewBox,
  iconId,
  color,
}: IButtonProps) => {
  return (
    <StyledButton color={color} primary={primary}>
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
  color: ${(props) => props.color || "#2B2B2B"};
  background: #ffb400;
  border: none;
  cursor: pointer;

  // primary button
  ${(props) =>
    props.primary &&
    css<StyledButtonProps>`
      color: ${(props) => props.color || "#2b2b2b"};
      font-size: ${(props) => props.fontSize || "16px"};
      font-weight: 500;
      padding: 16px 32px;
      border-radius: 5px;
      text-transform: uppercase;
    `}
`;
