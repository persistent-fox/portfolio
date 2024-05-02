import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface IBurgerProps {}

export const Burger = ({}: IBurgerProps) => {
  return (
    <StyledBurger>
      <span></span>
    </StyledBurger>
  );
};

const StyledBurger = styled.div`
  span {
    position: absolute;
    display: block;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 2px;
    background-color: ${theme.colors.accent};
    z-index: 1;
    &:before {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.accent};
      transform: translateY(10px);
    }
    &:after {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.accent};
      transform: translateY(-10px);
    }
  }
`;
