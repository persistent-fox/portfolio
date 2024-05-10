import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

interface IInputProps {
  type?: "text" | "password" | "email";
  label?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  inputId: string;
  name: string;
}

export const TextField = ({
  label,
  inputId,
  type = "text",
  textarea = false,
  required = false,
  placeholder,
  name,
}: IInputProps) => {
  return (
    <StyledTextField>
      <FlexWrapper align-items={"flex-start"} gap={"10px"}>
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
          name={name}
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
    color: ${(props) => props.theme.colors.errors};
    font-weight: 700;
  }
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.grey.medium};
  border: none;
  padding: 16px 20px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
  font-weight: 400;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text.dark};
  border-radius: 5px;

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.colors.text.dark};
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
  background: ${(props) => props.theme.colors.grey.medium};
  border: none;
  padding: 10px 20px;
  width: 100%;
  height: 210px;
  font-family: "Inter", sans-serif;
  font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
  font-weight: 400;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text.dark};
  border-radius: 5px;
  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.colors.text.dark};
  }
  &::placeholder {
    font-family: "Inter", sans-serif;
    color: #4e4f50;
    font-size: calc((100vw - 375px) / (1920 - 375) * (20 - 15) + 15px);
    font-weight: 400;
    line-height: 1.2;
  }
`;
