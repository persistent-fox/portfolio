import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { NavIcon } from "../../../../components/nav-icon/NavIcon";
import { ThemeStyled } from "../../../../styles/Theme.styled";
import { SocialIcon } from "../../../../components/social-icon/SocialIcon";

interface IInfoCardProps {
  infoData: string[][];
  iconId: string;
}

export const InfoCard = ({ infoData, iconId }: IInfoCardProps) => {
  return (
    <StyledInfoCard>
      <SocialIcon
        width="18"
        height="18"
        viewBox="0 0 18 18"
        iconId={iconId}
      ></SocialIcon>
      {infoData.map((item) => (
        <FlexWrapper justify={"space-between"}>
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
  gap: 16px;
  padding: 25px;
  max-width: 370px;
  min-height: 210px;
  min-width: 310px;
  font-size: 18px;
  font-weight: 500;
  line-height: 123.6%;
  text-transform: capitalize;
  color: ${ThemeStyled.colors.text.dark};
  background-color: ${ThemeStyled.colors.primary};
`;
