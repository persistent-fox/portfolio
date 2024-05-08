import React, { useEffect, useState } from "react";
import { UserPanel } from "./user-panel/UserPanel";
import { S } from "./Aside_Styles";
import { Burger } from "../menu/burger/Burger";
import { Layout } from "../../../components/Layout";

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
          <Burger isOpen={isOpen} onClick={onClick} />
          <Layout isOpen={isOpen} onClick={onClick} />
        </>
      )}
      <UserPanel isOpen={isOpen} />
    </S.Aside>
  );
};
