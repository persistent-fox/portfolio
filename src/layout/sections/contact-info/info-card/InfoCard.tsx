import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "./../ContactInfo_Styles";
import { Icon } from "../../../../components/icon/Icon";

interface IInfoCardProps {
  infoData: string[][];
  iconId: string;
}

export const InfoCard = ({ infoData, iconId }: IInfoCardProps) => {
  return (
    <S.InfoCard>
      <S.IconFrame>
        <Icon
          width={"18"}
          height={"18px"}
          viewBox={"0 0 18 18"}
          iconId={iconId}
        />
      </S.IconFrame>
      {infoData.map((item) => (
        <FlexWrapper key={item[0]} justify={"space-between"}>
          <span>{item[0]}</span>
          <span>{item[1]}</span>
        </FlexWrapper>
      ))}
    </S.InfoCard>
  );
};
