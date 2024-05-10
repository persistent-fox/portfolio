import "./App.css";
import { Aside } from "./layout/sections/aside/Aside";
import { Main } from "./layout/sections/main/Main";
import { Education } from "./layout/sections/education/Education";
import { FlexWrapper } from "./components/FlexWrapper";
import { Container } from "./components/Container";
import { WorkHistory } from "./layout/sections/work-history/WorkHistory";
import { Portfolio } from "./layout/sections/portfolio/Portfolio";
import { ContactInfo } from "./layout/sections/contact-info/ContactInfo";
import { Footer } from "./layout/sections/footer/Footer";
import { MySkills } from "./layout/sections/my-skills/MySkills";
import { Menu } from "./layout/sections/menu/Menu";
import { menuItems } from "./mock/data";
import { Particle } from "./components/particle/Particle";
import { Route, Routes } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import { useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [mode, setMode] = useState("dark");
  const theme = mode === "light" ? lightTheme : darkTheme;
  const toggleMode = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Particle />
        <FlexWrapper justify={"space-between"}>
          <Aside />
          <Container>
            <MainContent>
              <Main />
              <Routes>
                <Route path={"/"} element={<MySkills />} />
                <Route path={"/education"} element={<Education />} />
                <Route path={"/work-history"} element={<WorkHistory />} />
                <Route path={"/portfolio"} element={<Portfolio />} />
                <Route path={"/contacts"} element={<ContactInfo />} />
              </Routes>
              <Footer />
            </MainContent>
          </Container>
          <Menu onClick={toggleMode} menuItems={menuItems} />
        </FlexWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
