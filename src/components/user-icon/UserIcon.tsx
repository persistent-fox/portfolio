import exp from "constants";
import styled from "styled-components";
import { ThemeStyled } from "../../styles/Theme.styled";

interface IUserIconProps {
  srcImg: string;
}

export const UserIcon = ({ srcImg }: IUserIconProps) => {
  return (
    <StyledUserIcon>
      <img src={srcImg} alt="" />
    </StyledUserIcon>
  );
};

export const StyledUserIcon = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${ThemeStyled.colors.grey.medium};
  &:before {
    content: "";
    position: absolute;
    bottom: 12px;
    right: 16px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #7eb942;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
