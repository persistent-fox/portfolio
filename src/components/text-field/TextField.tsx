import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/theme";

interface IInputProps {
  type?: "text" | "password" | "email";
  label?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  inputId: string;
}

export const TextField = ({
  label,
  inputId,
  type = "text",
  textarea = false,
  required = false,
  placeholder,
}: IInputProps) => {
  return (
    <StyledTextField>
      <FlexWrapper gap={"10px"}>
        <Label htmlFor={inputId}>
          <span>{label}</span>
          {required && <span>*</span>}
        </Label>
      </FlexWrapper>
      {textarea ? (
        <Textarea
          id={inputId}
          placeholder={placeholder || ""}
          rows={20}
        ></Textarea>
      ) : (
        <Input id={inputId} placeholder={placeholder || ""} type={type} />
      )}
    </StyledTextField>
  );
};

export const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  span + span {
    color: ${theme.colors.errors};
    font-weight: 700;
  }
`;

export const Input = styled.input`
  background: ${theme.colors.grey.medium};
  font-size: 18px;
  border: none;
  padding: 16px 20px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
  font-weight: 400;
  line-height: 1.2;
  color: ${theme.colors.text.dark};
  border-radius: 5px;

  &:focus-visible {
    outline: 1px solid ${theme.colors.text.dark};
  }

  &::placeholder {
    font-family: "Inter", sans-serif;
    color: #4e4f50;
    font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
    font-weight: 400;
    line-height: 1.2;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  background: ${theme.colors.grey.medium};
  border: none;
  padding: 10px 20px;
  width: 100%;
  height: 210px;
  font-family: "Inter", sans-serif;
  font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
  font-weight: 400;
  line-height: 1.2;
  color: ${theme.colors.text.dark};
  border-radius: 5px;
  &:focus-visible {
    outline: 1px solid ${theme.colors.text.dark};
  }
  &::placeholder {
    font-family: "Inter", sans-serif;
    color: #4e4f50;
    font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
    font-weight: 400;
    line-height: 1.2;
  }
`;
