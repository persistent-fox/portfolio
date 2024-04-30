import styled from "styled-components";
import { ThemeStyled } from "../../styles/Theme.styled";

interface IProgressBarProps {
  percent: string;
  skillName: string;
}

export const ProgressBar = ({ skillName, percent }: IProgressBarProps) => {
  return (
    <StyledProgressBar percent={percent}>
      <div className="info">
        <span>{skillName}</span>
        <span>{percent}</span>
      </div>
      <div className="field">
        <div className="progress"></div>
      </div>
    </StyledProgressBar>
  );
};

type StyledProgressBarProps = {
  percent: string;
};

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${ThemeStyled.colors.text.dark};
    font-kerning: none;
    font-feature-settings: "calt" off;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }
  .field {
    border: 1px solid ${ThemeStyled.colors.accent};
    padding: 1px;
    height: 5px;
    width: 100%;
    border-radius: 5px;
  }
  .progress {
    background-image: linear-gradient(
      to right,
      ${ThemeStyled.colors.secondary},
      ${ThemeStyled.colors.accent}
    );
    height: 2px;
    border-radius: 5px;
    width: ${(props) => props.percent || "30%"};
  }
`;
