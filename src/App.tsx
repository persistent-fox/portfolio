import "./App.css";
import { Menu } from "./layout/sections/menu/Menu";
import { Aside } from "./layout/sections/aside/Aside";
import { Main } from "./layout/sections/main/Main";
import { Education } from "./layout/sections/education/Education";
import { FlexWrapper } from "./components/FlexWrapper";
import { Container } from "./components/Container";
import { WorkHistory } from "./layout/sections/work-history/WorkHistory";
import { menuItems } from "./mock/data";
import { Portfolio } from "./layout/sections/portfolio/Portfolio";
import { ContactInfo } from "./layout/sections/contact-info/contactInfo";
import { Footer } from "./layout/sections/footer/Footer";
import { MySkills } from "./layout/sections/my-skills/MySkills";

function App() {
  return (
    <div className="App">
      <FlexWrapper justify={"space-between"}>
        <Aside />
        <Container>
          <Main />
          <MySkills />
          <Education />
          <WorkHistory />
          <Portfolio />
          <ContactInfo />
          <Footer />
        </Container>
        <Menu menuItems={menuItems} />
      </FlexWrapper>
    </div>
  );
}

export default App;