import { Aside } from "../../layout/sections/aside/Aside";

interface IMobileAsideProps {
  isOpen: boolean;
}

export const MobileAside = ({ isOpen }: IMobileAsideProps) => {
  return (
    <div>
      <Aside />
    </div>
  );
};
