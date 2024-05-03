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

  li {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
