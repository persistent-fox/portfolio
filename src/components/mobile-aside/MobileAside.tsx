import { Burger } from "../../layout/sections/menu/burger/Burger";
import { Aside } from "../../layout/sections/aside/Aside";

interface IMobileAsideProps {
  isOpen: boolean;
}

export const MobileAside = ({ isOpen }: IMobileAsideProps) => {
  return (
    <div>
      {/*<Burger isOpen={isOpen} />*/}
      <Aside />
    </div>
  );
};
