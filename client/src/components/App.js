import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import FunctionalVsClass from "./reactComponents/FunctionalVsClass";
import WhatIsReact from "./reactComponents/WhatIsReact";
import ReactComponents from "./reactComponents/ReactComponents";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp as thumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as thumbsUpRegular } from "@fortawesome/free-regular-svg-icons";

library.add(fab, thumbsUpSolid, thumbsUpRegular);

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid id="fullscreen">
          <Col>
            <NavigationBar />
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/functional-vs-class"
              component={FunctionalVsClass}
            />
            <Route exact path="/what-is-react" component={WhatIsReact} />
            <Route exact path="/react-components" component={ReactComponents} />
          </Col>
          <Row>
            <Footer />
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
