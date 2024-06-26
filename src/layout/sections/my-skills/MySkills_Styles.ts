import styled from "styled-components";

const MySkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;

  p {
    text-align: center;
    max-width: 438px;
    margin-bottom: 20px;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
  flex-grow: 1;
  padding-top: 20px;

  p {
    text-align: center;
  }
`;

const Frame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.tertiary};
  width: 80px;
  height: 80px;
  margin-bottom: 45px;
  &::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.accent}
    );
    transform: rotate(45deg);
    z-index: -1;
  }
`;

export const S = {
  MySkills,
  Skill,
  Frame,
};
