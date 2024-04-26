import styled from "styled-components";

interface IDividerProps {}

export const Divider = ({}: IDividerProps) => {
  return <StyledDivider></StyledDivider>;
};

export const StyledDivider = styled.span`
  display: block;
  background: #f0f0f6;
  height: 1.5px;
  width: 100%;
`;
