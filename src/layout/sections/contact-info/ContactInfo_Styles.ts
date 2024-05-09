import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { StyledSocialIcon } from "../../../components/social-icon/SocialIcon";
import { FlexWrapper } from "../../../components/FlexWrapper";

const InfoCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 25px;
  min-height: 210px;
  min-width: 320px;
  font-weight: 500;
  color: ${theme.colors.text.dark};
  background-color: ${theme.colors.primary};

  ${StyledSocialIcon} {
    margin-bottom: 30px;
  }
  ${FlexWrapper} {
    width: 100%;
    span + span {
      font-weight: 400;
    }
  }
  @media ${theme.media.small} {
    min-width: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  background-color: ${theme.colors.primary};
  padding: 25px;
  width: 100%;
  min-width: 480px;

  @media ${theme.media.small} {
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
  Form,
};
