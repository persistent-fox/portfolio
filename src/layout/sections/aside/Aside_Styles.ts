import styled, { css } from "styled-components";
import { TitleCard } from "../../../components/TitleCard";

type UserPanelProps = {
  isOpen: boolean;
};

const UserPanel = styled.div<UserPanelProps>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 50px 45px 25px 40px;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  overflow-y: auto;
  transition: transform 0.3s;

  @media ${(props) => props.theme.media.large} {
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
  @media ${(props) => props.theme.media.small} {
    max-width: none;
    width: 100%;
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

const Aside = styled.aside`
  position: relative;
  max-width: 375px;
  width: 100%;
  flex-grow: 1;
  height: 100vh;
  overflow-y: auto;

  *::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.scroll.trackAside};
  }

  *::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      to top,
      ${(props) => props.theme.colors.scroll.trackAside},
      ${(props) => props.theme.colors.scroll.thumbAside}
    );
    border-radius: 5px;
  }

  @media ${(props) => props.theme.media.large} {
    max-width: none;
    flex-grow: 0;
    width: auto;
  }
`;

const InfoArrow = styled.div`
  position: fixed;
  top: 20px;
  left: 45px;
  z-index: 5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: ${(props) => props.theme.colors.tertiary};
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.accent}
  );
  cursor: pointer;
  transform: rotate(180deg);
`;

const Close = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: ${(props) => props.theme.colors.tertiary};
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.accent}
  );
  cursor: pointer;
  visibility: hidden;

  @media ${(props) => props.theme.media.small} {
    visibility: visible;
  }
`;

export const S = {
  UserPanel,
  MainInfo,
  Skills,
  Aside,
  InfoArrow,
  Close,
};
