import { Icon } from "../../../../components/icon/Icon";
import styled, { css } from "styled-components";
import { ThemeStyled } from "../../../../styles/Theme.styled";

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
  background-color: ${ThemeStyled.colors.grey.medium};
  transition: all 0.3s ease-in-out;
  color: ${ThemeStyled.colors.text.dark};

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
    color: ${ThemeStyled.colors.text.tertiary};
    background: ${ThemeStyled.colors.grey.medium};
    border-radius: 5px;
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px;
      border-style: solid;
      border-color: ${ThemeStyled.colors.grey.medium} transparent transparent
        transparent;
    }
  }

  &:hover {
    color: ${ThemeStyled.colors.tertiary};
    background-image: linear-gradient(
      to right,
      ${ThemeStyled.colors.secondary},
      ${ThemeStyled.colors.accent}
    );
    span {
      visibility: visible;
    }
  }
`;
