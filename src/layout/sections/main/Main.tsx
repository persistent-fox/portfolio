import Typewriter from "typewriter-effect";
import { Button } from "../../../components/button/Button";
import srcImg from "./../../../assets/images/photo.png";
import srcImg2x from "./../../../assets/images/photo@2x.png";
import srcImgWebP from "./../../../assets/images/photo.webp";
import srcImgWebP2x from "./../../../assets/images/photo2x.webp";
import { S } from "./Main_Styles";
interface IMainProps {}

export const Main = ({}: IMainProps) => {
  return (
    <S.Main>
      <S.Information>
        <S.Name>
          <Typewriter
            options={{
              strings: ["I’m Margarita Abdullina"],
              autoStart: true,
              loop: true,
            }}
          />
        </S.Name>
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
      <picture>
        <source
          srcSet={`${srcImgWebP2x} 2x, ${srcImgWebP} 1x`}
          type="image/webp"
        />
        <img src={srcImg} srcSet={`${srcImg2x} 2x`} alt="photo" />
      </picture>
    </S.Main>
  );
};
