import React from "react";
import styled, { css } from "styled-components";

interface ITabMenuProps {
  tabs: Array<Record<string, string>>;
  filter: string;
  onClickTabHandler: (status: string) => void;
}

export const TabMenu = ({ tabs, filter, onClickTabHandler }: ITabMenuProps) => {
  return (
    <TabList>
      {tabs.map((item) => (
        <li key={item.status}>
          <Tab
            active={item.status === filter}
            onClick={() => onClickTabHandler(item.status)}
            key={item.title}
          >
            {item.title}
          </Tab>
        </li>
      ))}
    </TabList>
  );
};

const TabList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

type TabProps = {
  active?: boolean;
};

const Tab = styled.button<TabProps>`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text.dark};
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.colors.text.tertiary};

      &:before {
        content: "";
        position: absolute;
        bottom: 2px;
        width: 100%;
        height: 6px;
        background-image: linear-gradient(
          to right,
          ${(props) => props.theme.colors.secondary},
          ${(props) => props.theme.colors.accent}
        );
        z-index: -1;
      }
    `};
`;
