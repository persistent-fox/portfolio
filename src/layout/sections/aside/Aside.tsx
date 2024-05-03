import styled from "styled-components";
import { Button } from "../../../components/button/Button";
import { Divider } from "../../../components/Divider";
import { languages, skills, socials } from "../../../mock/data";
import { Skills } from "./skills/Skills";
import { MainInfo } from "./main-info/MainInfo";
import { theme } from "../../../styles/theme";

interface IAsideProps {}

export const Aside = ({}: IAsideProps) => {
  return (
    <StyledAside>
      <MainInfo socials={socials} />
      <Divider />
      <Skills title="Languages" skills={languages} />
      <Divider />
      <Skills title="Skills" skills={skills} />
      <Divider />
      <Skills list title="Extra Skills" skills={skills} />
      <Divider />
      <Button width="14" height="17" viewBox="0 0 14 17" iconId="download">
        Download cv
      </Button>
    </StyledAside>
  );
};

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 375px;
  width: 100%;
  padding: 50px 45px 25px 40px;
  background-color: ${theme.colors.primary};
  height: 100%;

  @media ${theme.media.large} {
    position: fixed;
    left: 0;
    transform: translateX(-100%);
  }
`;
