import styled from "styled-components";

type StyledTitleSectionProps = {
  fontSize?: string;
  fontWeight?: string;
};

export const TitleSection = styled.h2<StyledTitleSectionProps>`
  color: #2b2b2b;
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: ${(props) => props.fontSize || "700"};
  line-height: 120%;
  text-transform: capitalize;
`;
