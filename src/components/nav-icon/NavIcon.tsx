import { Icon } from "../icon/Icon";
import styled, { css } from "styled-components";
import { ThemeStyled } from "../../styles/Theme.styled";

interface INavIconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  social?: boolean;
}

export const NavIcon = ({
  iconId,
  width,
  height,
  viewBox,
  social,
}: INavIconProps) => {
  return (
    <StyledLinkIcon social={social}>
      <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
    </StyledLinkIcon>
  );
};

type StyledLinkIconProps = {
  social?: boolean;
};

export const StyledLinkIcon = styled.a<StyledLinkIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${ThemeStyled.colors.grey.medium};
  transition: all 0.3s ease-in-out;
  color: ${ThemeStyled.colors.text.dark};

  &:hover {
    color: ${ThemeStyled.colors.tertiary};
    background-image: linear-gradient(
      to right,
      ${ThemeStyled.colors.secondary},
      ${ThemeStyled.colors.accent}
    );
  }
`;
