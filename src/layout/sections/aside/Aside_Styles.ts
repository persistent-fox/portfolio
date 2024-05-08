import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import { TitleCard } from "../../../components/TitleCard";

type UserPanelProps = {
  isOpen: boolean;
};

const UserPanel = styled.aside<UserPanelProps>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 375px;
  width: 100%;
  padding: 50px 45px 25px 40px;
  background-color: ${theme.colors.primary};
  height: 100%;
  overflow-y: auto;

  @media ${theme.media.large} {
    position: fixed;
    left: 0;
    transform: translateX(-100%);
    z-index: 5;

    ${(props) =>
      props.isOpen &&
      css`
        transform: translateX(0);
      `}
  }
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const Skills = styled.section`
  ${TitleCard} {
    margin-bottom: 15px;
  }
`;

const Aside = styled.div``;

export const S = {
  UserPanel,
  MainInfo,
  Skills,
  Aside,
};
