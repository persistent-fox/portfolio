import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ISocialIconProps {
  iconId: string;
  widthIcon?: string;
  heightIcon?: string;
  widthFrame?: string;
  heightFrame?: string;
  viewBox?: string;
}

export const SocialIcon = ({
  iconId,
  widthIcon,
  heightIcon,
  viewBox,
  heightFrame,
  widthFrame,
}: ISocialIconProps) => {
  return (
    <StyledSocialIcon heightFrame={heightFrame} widthFrame={widthFrame}>
      <Icon
        width={widthIcon}
        height={heightIcon}
        viewBox={viewBox}
        iconId={iconId}
      />
    </StyledSocialIcon>
  );
};

type StyledSocialIconProps = {
  widthFrame?: string;
  heightFrame?: string;
};

export const StyledSocialIcon = styled.a<StyledSocialIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: ${(props) => props.widthFrame || "24px"};
  height: ${(props) => props.heightFrame || "24px"};
  border-radius: 50%;
  color: ${theme.colors.tertiary};
  background-image: linear-gradient(
    to right,
    ${theme.colors.secondary},
    ${theme.colors.accent}
  );
  transition: all 0.3s ease-in-out;
  @media ${theme.media.hover} {
    &:hover {
      transform: translateY(-15%);
    }
  }
`;
