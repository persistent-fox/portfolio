import { Icon } from "../../../../components/icon/Icon";
import styled, { css } from "styled-components";
import { theme } from "../../../../styles/theme";

interface INavIconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const NavIcon = ({ iconId, width, height, viewBox }: INavIconProps) => {
  return (
    <StyledLinkIcon>
      <span>{iconId}</span>
      <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
    </StyledLinkIcon>
  );
};

type StyledLinkIconProps = {
  social?: boolean;
};

export const StyledLinkIcon = styled.a<StyledLinkIconProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.grey.medium};
  transition: color 0.3s ease-in-out;
  color: ${theme.colors.text.dark};

  span {
    position: absolute;
    display: inline-block;
    padding: 5px 15px;
    left: 50%;
    top: -38px;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    visibility: hidden;
    color: ${theme.colors.text.tertiary};
    background: ${theme.colors.grey.medium};
    border-radius: 5px;
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px;
      border-style: solid;
      border-color: ${theme.colors.grey.medium} transparent transparent
        transparent;
    }
  }

  &:hover {
    color: ${theme.colors.tertiary};
    background-image: linear-gradient(
      to right,
      ${theme.colors.secondary},
      ${theme.colors.accent}
    );
    span {
      visibility: visible;
    }
  }
`;
