import { Form, StyledForm } from "./form/Form";
import { InfoCard } from "./info-card/InfoCard";
import { contactInfo, placeOfResidence } from "../../../mock/data";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/title-section/TitleSection";

interface IContactInfoProps {}

export const ContactInfo = ({}: IContactInfoProps) => {
  return (
    <StyledContactInfo>
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
    </StyledContactInfo>
  );
};

export const StyledContactInfo = styled.section`
  display: flex;
  gap: 30px;
  padding: 35px 0;
  flex-wrap: wrap;

  ${StyledForm} {
    flex-grow: 1;
  }
`;
