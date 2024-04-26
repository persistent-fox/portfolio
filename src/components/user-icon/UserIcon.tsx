import exp from "constants";
import styled from "styled-components";

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
  background-color: #f0f0f6;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
