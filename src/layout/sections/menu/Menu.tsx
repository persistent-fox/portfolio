import { menuItems } from "../../../mock/data";
import React, { useState } from "react";
import { NavPanel } from "./nav-panel/NavPanel";
import { Icon } from "../../../components/icon/Icon";
import { Layout } from "../../../components/Layout";
import { S } from "./Menu_Styles";

interface IMobileMenuProps {}

export const Menu: React.FC<IMobileMenuProps> = ({}: IMobileMenuProps) => {
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
    <>
      {width < breakPoint && (
        <>
          <S.NavArrow onClick={onClick}>
            <Icon
              iconId={"menu-arrow"}
              width={"25px"}
              height={"20px"}
              viewBox={"0 0 448 512"}
            />
          </S.NavArrow>
          <Layout isOpen={isOpen} onClick={onClick} />
        </>
      )}
      <NavPanel menuItems={menuItems} onClick={onClick} isOpen={isOpen} />
    </>
  );
};
