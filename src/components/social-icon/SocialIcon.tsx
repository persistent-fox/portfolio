import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { ThemeStyled } from "../../styles/Theme.styled";

interface ISocialIconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  social?: boolean;
}

export const SocialIcon = ({
  iconId,
  width,
  height,
  viewBox,
}: ISocialIconProps) => {
  return (
    <StyledSocialIcon>
      <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
    </StyledSocialIcon>
  );
};

export const StyledSocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${ThemeStyled.colors.tertiary};
  background-image: linear-gradient(
    to right,
    ${ThemeStyled.colors.secondary},
    ${ThemeStyled.colors.accent}
  );
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-15%);
  }
`;
