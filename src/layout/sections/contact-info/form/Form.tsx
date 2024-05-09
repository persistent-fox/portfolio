import emailjs from "@emailjs/browser";
import { TextField } from "../../../../components/text-field/TextField";
import { Button } from "../../../../components/button/Button";
import { S } from "./../ContactInfo_Styles";
import React, { ElementRef, useRef } from "react";

interface IFormProps {}

export const Form: React.FC<IFormProps> = ({}: IFormProps) => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;
    console.log(form.current);
    emailjs
      .sendForm("service_ivqmwsu", "template_r7ezqqh", form.current, {
        publicKey: "lT9PVTppmixYgpPEM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <S.Form ref={form} onSubmit={sendEmail}>
      <TextField
        inputId={"name"}
        placeholder={"Enter your name"}
        label={"Your Full Name"}
        required={true}
        type={"text"}
        name={"name"}
      />
      <TextField
        inputId={"email"}
        placeholder={"Enter your email"}
        label={"Your Email"}
        required={true}
        type={"text"}
        name={"email"}
      />
      <TextField
        inputId={"subject"}
        placeholder={"Enter your subject"}
        label={"Subject"}
        type={"text"}
        name={"subject"}
        required={true}
      />
      <TextField
        inputId={"massage"}
        placeholder={"Message here"}
        label={"Your Message"}
        name={"message"}
        required={true}
        textarea
      />
      <Button type={"submit"} primary fontWeight={"600"}>
        send message
      </Button>
    </S.Form>
  );
};
