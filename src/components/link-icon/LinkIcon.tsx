import { Icon } from "../icon/Icon";
import styled, { css } from "styled-components";

interface ILinkIconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  social?: boolean;
}

export const LinkIcon = ({
  iconId,
  width,
  height,
  viewBox,
  social,
}: ILinkIconProps) => {
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
  background-color: #f0f0f6;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #2b2b2b;
    background-color: #ffb400;
  }

  ${(props) =>
    props.social &&
    css`
      padding: 0;
      width: 24px;
      height: 24px;
      color: #2b2b2b;
      background-color: #ffb400;
    `}
`;
