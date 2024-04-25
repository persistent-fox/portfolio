import sprite from "../../assets/images/icons-sprite.svg";

interface IIconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const Icon = ({ iconId, width, height, viewBox }: IIconProps) => {
  return (
    <a href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "50"}
        height={height || "50"}
        viewBox={viewBox || "0 0 50 50"}
        fill="none"
      >
        <use xlinkHref={`${sprite}#${iconId}`} />
      </svg>
    </a>
  );
};
