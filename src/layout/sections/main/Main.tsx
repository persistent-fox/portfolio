import { Button } from "../../../components/button/Button";
import srcImg from "./../../../assets/images/photo.webp";
import { S } from "./Main_Styles";
interface IMainProps {}

export const Main = ({}: IMainProps) => {
  return (
    <S.Main>
      <S.Information>
        <S.Name>I’m Margarita Abdullina</S.Name>
        <S.Title>
          <S.Highlighted>Front-end</S.Highlighted> Developer
        </S.Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <Button
          primary
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          iconId="arrow-follow"
        >
          Hire me
        </Button>
      </S.Information>
      <img src={srcImg} alt="photo" />
    </S.Main>
  );
};
