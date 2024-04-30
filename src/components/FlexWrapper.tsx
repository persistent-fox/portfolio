import styled from "styled-components";
import { ElementType, ReactNode } from "react";

export type FlexWrapperProps<T extends ElementType = "div"> = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  flex?: string;
  gap?: string;
  full?: string;
  maxWidth?: string;
  mt?: string;
  mb?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex: ${(props) => props.flex || "0 1 auto"};
  gap: ${(props) => props.gap || "0"};
  max-width: ${(props) => props.maxWidth || ""};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
`;
