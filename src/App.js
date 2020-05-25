import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/navbar";
import AboutMe from "./components/pages/about-me";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio"
import Container from "./components/Context"
import Footer from "./components/footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
          <Wrapper>
              <NavBar/>
              <Container>
                  <Switch>
                      <Route exact path={["/", "/react-portfolio/", "/react-portfolio/about"]}>
                          <AboutMe/>
                      </Route>

                      <Route exact path="/react-portfolio/portfolio">
                          <Portfolio/> 
                      </Route>

                      <Route exact path="/react-portfolio/contact">
                          <Contact/>
                      </Route> 

                      <Route>
                          <AboutMe/>
                      </Route>
                  </Switch>
              </Container>
              <Footer/>
          </Wrapper>

      </div>
    </Router>
    
  );
}

export default App;
