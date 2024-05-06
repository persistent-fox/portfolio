import { Burger } from "./burger/Burger";
import { menuItems } from "../../../mock/data";
import React, { useState } from "react";
import { NavPanel } from "./nav-panel/NavPanel";
import { S } from "./Menu_Styles";

interface IMobileMenuProps {}

export const Menu = ({}: IMobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 991;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const onClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <S.MobileMenu>
      {width < breakPoint && (
        <>
          <Burger onClick={onClick} isOpen={isOpen} />
          <S.Layout isOpen={isOpen} onClick={onClick} />
        </>
      )}
      <NavPanel menuItems={menuItems} onClick={onClick} isOpen={isOpen} />
    </S.MobileMenu>
  );
};
