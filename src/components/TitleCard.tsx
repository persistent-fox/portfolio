import styled from "styled-components";

export const TitleCard = styled.h3`
  color: ${(props) => props.theme.colors.text.tertiary};
  font-size: calc((100vw - 375px) / (1920 - 375) * (25 - 18) + 18px);
  font-weight: 500;
  text-transform: capitalize;
`;
