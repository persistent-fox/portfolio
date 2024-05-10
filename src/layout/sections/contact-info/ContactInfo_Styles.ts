import styled from "styled-components";
import { StyledSocialIcon } from "../../../components/social-icon/SocialIcon";
import { FlexWrapper } from "../../../components/FlexWrapper";

const InfoCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 25px;
  min-width: 320px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.dark};
  background-color: ${(props) => props.theme.colors.primary};

  ${StyledSocialIcon} {
    margin-bottom: 30px;
  }
  ${FlexWrapper} {
    width: 100%;
    span + span {
      font-weight: 400;
    }
  }
  @media ${(props) => props.theme.media.small} {
    min-width: 0;
  }
`;

const IconFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.accent}
  );
  border-radius: 50%;
  color: ${(props) => props.theme.colors.tertiary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 25px;
  width: 100%;
  min-width: 480px;

  @media ${(props) => props.theme.media.small} {
    min-width: 0;
    padding: 15px;
  }
`;

const ContactInfo = styled.section`
  position: relative;
  display: flex;
  gap: 30px;
  padding: 35px 0;
  flex-wrap: wrap;

  ${Form} {
    flex-grow: 1;
  }
`;

export const S = {
  ContactInfo,
  InfoCard,
  IconFrame,
  Form,
};
