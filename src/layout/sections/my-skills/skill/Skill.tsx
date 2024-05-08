import { Icon } from "../../../../components/icon/Icon";
import { TitleCard } from "../../../../components/TitleCard";
import { S } from "./../MySkills_Styles";

interface ISkillProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  description: string;
  title: string;
}

export const Skill = ({
  iconId,
  width,
  height,
  viewBox,
  description,
  title,
}: ISkillProps) => {
  return (
    <S.Skill>
      <S.Frame>
        <Icon width={width} height={height} viewBox={viewBox} iconId={iconId} />
      </S.Frame>
      <TitleCard>{title}</TitleCard>
      <p>{description}</p>
    </S.Skill>
  );
};
