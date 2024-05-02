import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ThemeStyled } from "../../../../styles/Theme.styled";
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
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  text-transform: capitalize;
  color: ${ThemeStyled.colors.text.dark};
  background-color: ${ThemeStyled.colors.primary};

  ${StyledSocialIcon} {
    margin-bottom: 30px;
  }
  ${FlexWrapper} {
    width: 100%;
  }
`;
