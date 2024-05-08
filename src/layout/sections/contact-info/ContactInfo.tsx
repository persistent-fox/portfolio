import { Form } from "./form/Form";
import { InfoCard } from "./info-card/InfoCard";
import { contactInfo, placeOfResidence } from "../../../mock/data";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/TitleSection";

import { S } from "./ContactInfo_Styles";
import React from "react";

interface IContactInfoProps {}

export const ContactInfo: React.FC<
  IContactInfoProps
> = ({}: IContactInfoProps) => {
  return (
    <S.ContactInfo>
      <FlexWrapper
        flex={"1 1 auto"}
        gap={"50px"}
        direction={"column"}
        as={"article"}
      >
        <TitleSection>Leave us your info</TitleSection>
        <Form />
      </FlexWrapper>
      <FlexWrapper
        flex={"1 1 auto"}
        gap={"50px"}
        as={"article"}
        direction={"column"}
      >
        <TitleSection>Contact information</TitleSection>
        <FlexWrapper gap={"14px"} direction={"column"}>
          <InfoCard iconId={"location"} infoData={placeOfResidence} />
          <InfoCard iconId={"mail"} infoData={contactInfo} />
          <InfoCard iconId={"mail"} infoData={contactInfo} />
        </FlexWrapper>
      </FlexWrapper>
    </S.ContactInfo>
  );
};
