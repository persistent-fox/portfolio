import styled from "styled-components";
import { UserIcon } from "../../components/user-icon/UserIcon";
import srcImg from "./../../assets/images/photo.webp";
import { Button } from "../../components/button/Button";
import { LinkIcon } from "../../components/link-icon/LinkIcon";
import { Divider } from "../../components/devider/Divider";
import { TitleSection } from "../../components/title-section/TitleSection";
import { ProgressBar } from "../../components/progress-bar/ProgressBar";
import { extraSkills, languages, skills, socials } from "../../mock/data";
import { List } from "../../components/list/List";

interface IAsideProps {}

export const Aside = ({}: IAsideProps) => {
  return (
    <StyledAside>
      <div className="main-info">
        <UserIcon srcImg={srcImg} />
        <TitleSection fontSize="18px" fontWeight="500">
          Rayan Adlardard
        </TitleSection>
        <h2 className="title">Font-end Developer</h2>
        <div className="socials">
          {socials.map((item) => (
            <LinkIcon
              key={item}
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              social
              iconId={item}
            />
          ))}
        </div>
      </div>
      <Divider />
      <section>
        <TitleSection fontSize="18px" fontWeight="500">
          Languages
        </TitleSection>
        <SkillsWrapper>
          {languages.map((item) => (
            <ProgressBar key={item[0]} skillName={item[0]} percent={item[1]} />
          ))}
        </SkillsWrapper>
      </section>
      <Divider />
      <section>
        <TitleSection fontSize="18px" fontWeight="500">
          Skills
        </TitleSection>
        <SkillsWrapper>
          {skills.map((item) => (
            <ProgressBar key={item[0]} skillName={item[0]} percent={item[1]} />
          ))}
        </SkillsWrapper>
      </section>
      <Divider />
      <section>
        <TitleSection fontSize="18px" fontWeight="500" title="Extra Skills">
          Extra Skills
        </TitleSection>
        <SkillsWrapper>
          <List listItems={extraSkills} />
        </SkillsWrapper>
      </section>
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
  justify-content: center;
  gap: 25px;
  max-width: 305px;
  width: 100%;
  padding: 50px 45px 25px 40px;
  background-color: white;

  .title {
    color: #767676;
    font-kerning: none;
    font-feature-settings: "calt" off;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }

  .main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  }
  .socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  margin-top: 15px;
`;
