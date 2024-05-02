import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IProjectLinkProps {
  titleLink: string;
  iconId: string;
}

export const ProjectLink = ({ titleLink, iconId }: IProjectLinkProps) => {
  return (
    <StyledProjectLink href={"#"}>
      <Icon
        width={"20px"}
        height={"20px"}
        viewBox={"0 0 20 20"}
        iconId={iconId}
      />
      <span>{titleLink}</span>
    </StyledProjectLink>
  );
};

export const StyledProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${theme.colors.text.dark};
  text-decoration-line: underline;
  transition: all 0.3s;

  &:hover {
    color: ${theme.colors.text.tertiary};
  }
`;
