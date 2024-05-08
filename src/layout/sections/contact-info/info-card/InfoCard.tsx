import { FlexWrapper } from "../../../../components/FlexWrapper";
import { SocialIcon } from "../../../../components/social-icon/SocialIcon";
import { S } from "./../ContactInfo_Styles";

interface IInfoCardProps {
  infoData: string[][];
  iconId: string;
}

export const InfoCard = ({ infoData, iconId }: IInfoCardProps) => {
  return (
    <S.InfoCard>
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
    </S.InfoCard>
  );
};
