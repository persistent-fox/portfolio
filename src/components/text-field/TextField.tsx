import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { ThemeStyled } from "../../styles/Theme.styled";

interface IInputProps {
  type?: "text" | "password";
  label?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}

export const TextField = ({
  label,
  type = "text",
  textarea = false,
  required = false,
  placeholder,
}: IInputProps) => {
  return (
    <StyledTextField>
      <FlexWrapper gap={"10px"}>
        <Text>{label}</Text>
        {required && <Text>(Required)</Text>}
      </FlexWrapper>
      {textarea ? (
        <Textarea placeholder={placeholder || ""} rows={20}></Textarea>
      ) : (
        <Input placeholder={placeholder || ""} type={type} />
      )}
    </StyledTextField>
  );
};

export const StyledTextField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Text = styled.span`
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
