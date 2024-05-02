import { TextField } from "../../../../components/text-field/TextField";
import styled from "styled-components";
import { Button } from "../../../../components/button/Button";
import { ThemeStyled } from "../../../../styles/Theme.styled";

interface IFormProps {}

export const Form = ({}: IFormProps) => {
  return (
    <StyledForm>
      <TextField
        inputId={"name"}
        placeholder={"Enter your name"}
        label={"Your Full Name"}
        required={true}
        type={"text"}
      />
      <TextField
        inputId={"email"}
        placeholder={"Enter your email"}
        label={"Your Email"}
        required={true}
        type={"text"}
      />
      <TextField
        inputId={"subject"}
        placeholder={"Enter your subject"}
        label={"Subject"}
        type={"text"}
      />
      <TextField
        inputId={"massage"}
        placeholder={"Message here"}
        label={"Your Message"}
        textarea
      />
      <Button primary fontWeight={"600"}>
        send message
      </Button>
    </StyledForm>
  );
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  background-color: ${ThemeStyled.colors.primary};
  padding: 25px;
  max-width: 570px;
  width: 100%;
  min-width: 480px;
`;
