import React, { useEffect, useState } from "react";
import { UserPanel } from "./user-panel/UserPanel";
import { S } from "./Aside_Styles";
import { Layout } from "../../../components/Layout";
import { Icon } from "../../../components/icon/Icon";

interface IAsideProps {}

export const Aside: React.FC<IAsideProps> = ({}: IAsideProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 991;

  const onClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Aside>
      {width < breakPoint && (
        <>
          <S.InfoArrow onClick={onClick}>
            <Icon
              viewBox={"0 0 448 512"}
              width={"25px"}
              height={"20px"}
              iconId={"menu-arrow"}
            />
          </S.InfoArrow>
          <Layout isOpen={isOpen} onClick={onClick} />
        </>
      )}
      <UserPanel isOpen={isOpen} onClick={onClick} />
    </S.Aside>
  );
};
