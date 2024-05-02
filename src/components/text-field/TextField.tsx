import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { ThemeStyled } from "../../styles/Theme.styled";

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
        <Text htmlFor={inputId}>
          {label}
          {required && " (Required)"}
        </Text>
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

export const Text = styled.label`
  color: ${ThemeStyled.colors.text.dark};
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  text-transform: capitalize;
`;

export const Input = styled.input`
  background: ${ThemeStyled.colors.grey.medium};
  font-size: 18px;
  border: none;
  padding: 16px 20px;
  width: 100%;
  color: ${ThemeStyled.colors.text.dark};
  border-radius: 5px;
  &:focus-visible {
    outline: 1px solid ${ThemeStyled.colors.text.dark};
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  background: ${ThemeStyled.colors.grey.medium};
  border: none;
  padding: 10px 20px;
  width: 100%;
  height: 210px;
  color: ${ThemeStyled.colors.text.dark};
  border-radius: 5px;
  &:focus-visible {
    outline: 1px solid ${ThemeStyled.colors.text.dark};
  }
`;
