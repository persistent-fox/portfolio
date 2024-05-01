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
    <FlexWrapper direction={"column"} gap={"12px"}>
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
    </FlexWrapper>
  );
};

export const Text = styled.label`
  color: ${ThemeStyled.colors.text.dark};
  font-size: 18px;
  font-weight: 500;
  line-height: 123.6%;
  text-transform: capitalize;
`;

export const Input = styled.input`
  background: ${ThemeStyled.colors.grey.medium};
  border: none;
  padding: 10px 20px;
  width: 100%;
  color: ${ThemeStyled.colors.text.dark};
`;

export const Textarea = styled.textarea`
  resize: none;
  background: ${ThemeStyled.colors.grey.medium};
  border: none;
  padding: 10px 20px;
  width: 100%;
  height: 210px;
  color: ${ThemeStyled.colors.text.dark};
`;
