import styled from "styled-components";
import { Navigation } from "../../components/navigation/Navigation";
import { Icon } from "../../components/icon/Icon";
import { LinkIcon } from "../../components/link-icon/LinkIcon";

interface INavigationProps {}

export const Menu = ({}: INavigationProps) => {
  return (
    <StyledMenu>
      <LinkIcon
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        iconId="moon-theme-icon"
      />
      <Navigation />
    </StyledMenu>
  );
};

export const StyledMenu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
  background: #fafafa;
  box-shadow: 4px 0 10px 0 rgba(47, 122, 249, 0.1);
  max-width: 108px;
  height: 100vh;

  a {
    //flex-grow: 1;
    color: #767676;
  }
  //
  //nav {
  //  flex-grow: 3;
  //}
`;
