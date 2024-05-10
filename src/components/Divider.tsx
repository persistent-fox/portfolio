import styled from "styled-components";

export const Divider = styled.span`
  display: block;
  background: ${(props) => props.theme.colors.grey.medium};
  height: 1.5px;
  width: 100%;
`;
