import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/theme";
import {
  SocialIcon,
  StyledSocialIcon,
} from "../../../../components/social-icon/SocialIcon";

interface IInfoCardProps {
  infoData: string[][];
  iconId: string;
}

export const InfoCard = ({ infoData, iconId }: IInfoCardProps) => {
  return (
    <StyledInfoCard>
      <SocialIcon
        widthIcon="18"
        heightIcon="18"
        viewBox="0 0 18 18"
        iconId={iconId}
        widthFrame={"40px"}
        heightFrame={"40px"}
      />
      {infoData.map((item) => (
        <FlexWrapper key={item[0]} justify={"space-between"}>
          <span>{item[0]}</span>
          <span>{item[1]}</span>
        </FlexWrapper>
      ))}
    </StyledInfoCard>
  );
};

export const StyledInfoCard = styled.article`
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
