import { TextField } from "../../../../components/text-field/TextField";
import { Button } from "../../../../components/button/Button";
import { S } from "./../ContactInfo_Styles";
import React from "react";

interface IFormProps {}

export const Form: React.FC<IFormProps> = ({}: IFormProps) => {
  return (
    <S.Form>
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
    </S.Form>
  );
};
