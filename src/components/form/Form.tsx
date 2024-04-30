import { TextField } from "../text-field/TextField";
import styled from "styled-components";
import { Button } from "../button/Button";
import { ThemeStyled } from "../../styles/Theme.styled";

interface IFormProps {}

export const Form = ({}: IFormProps) => {
  return (
    <StyledForm>
      <TextField
        placeholder={"Enter your name"}
        label={"Your Full Name"}
        required={true}
        type={"text"}
      />
      <TextField
        placeholder={"Enter your email"}
        label={"Your Email"}
        required={true}
        type={"text"}
      />
      <TextField
        placeholder={"Enter your subject"}
        label={"Subject"}
        type={"text"}
      />
      <TextField placeholder={"Message here"} label={"Your Message"} textarea />
      <Button primary fontWeight={"600"}>
        send message
      </Button>
    </StyledForm>
  );
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: ${ThemeStyled.colors.primary};
  padding: 25px;
  max-width: 570px;
  width: 100%;
`;
