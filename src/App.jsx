import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Main, AppContainer } from "./App.styles";

const App = () => {
  return (
    <Main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AppContainer></AppContainer>} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route
                    path="/about"
                    element={<AppContainer></AppContainer>}
                  />
                  <Route
                    path="/projects"
                    element={<AppContainer></AppContainer>}
                  />
                  <Route
                    path="/contact"
                    element={<AppContainer></AppContainer>}
                  />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </Main>
  );
};

export default App;
