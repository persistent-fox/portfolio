import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IProgressBarProps {
  percent: string;
  skillName: string;
}

export const ProgressBar = ({ skillName, percent }: IProgressBarProps) => {
  return (
    <>
      <Info>
        <span>{skillName}</span>
        <span>{percent}</span>
      </Info>
      <Field>
        <Progress percent={percent} />
      </Field>
    </>
  );
};

type StyledProgressBarProps = {
  percent: string;
};

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Field = styled.div`
  border: 1px solid ${theme.colors.accent};
  padding: 1px;
  height: 5px;
  width: 100%;
  border-radius: 5px;
`;

export const Progress = styled.span<StyledProgressBarProps>`
  display: block;
  background-image: linear-gradient(
    to right,
    ${theme.colors.secondary},
    ${theme.colors.accent}
  );
  height: 2px;
  border-radius: 5px;
  width: ${(props) => props.percent || "30%"};
`;
