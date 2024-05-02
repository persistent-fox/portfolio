import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";

interface IListProps {
  listItems: string[];
}

export const List = ({ listItems }: IListProps) => {
  return (
    <StyledList>
      {listItems.map((item) => (
        <li key={item}>
          <Icon
            width="15"
            height="15"
            viewBox="0 0 15 15"
            iconId="double-square"
          />
          {item}
        </li>
      ))}
    </StyledList>
  );
};

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${theme.colors.text.dark};
  font-kerning: none;
  font-feature-settings: "calt" off;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;

  li {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
