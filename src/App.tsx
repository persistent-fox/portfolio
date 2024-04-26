import "./App.css";
import { Menu } from "./layout/menu/Menu";
import { Aside } from "./layout/aside/Aside";
import { Main } from "./layout/sections/main/Main";
import { Education } from "./layout/sections/education/Education";
import { FlexWrapper } from "./components/FlexWrapper";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <FlexWrapper justify={"space-between"}>
        <Aside />
        <Container>
          <Main />
          <Education />
        </Container>
        <Menu />
      </FlexWrapper>
    </div>
  );
}

export default App;
