import { Icon } from "../icon/Icon";
import styled from "styled-components";

interface INavigationProps {}

export const Navigation = ({}: INavigationProps) => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="#">
            <Icon width="18" height="18" viewBox="0 0 18 18" iconId="home" />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon
              width="18"
              height="18"
              viewBox="0 0 18 18"
              iconId="file-code"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon
              width="18"
              height="18"
              viewBox="0 0 18 18"
              iconId="user-icon"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon
              width="18"
              height="18"
              viewBox="0 0 18 18"
              iconId="portfolio"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon width="18" height="18" viewBox="0 0 18 18" iconId="blog" />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon width="18" height="18" viewBox="0 0 18 18" iconId="contact" />
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;
