import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp as thumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as thumbsUpRegular } from "@fortawesome/free-regular-svg-icons";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

import FunctionalVsClass from "./reactFolder/FunctionalVsClass";
import WhatIsJSX from "./reactFolder/WhatIsJSX";
import ReactComponents from "./reactFolder/ReactComponents";
import PropsVsState from "./reactFolder/PropsVsState";
import LifeCycleMethods from "./reactFolder/LifeCycleMethods";
import ReactEvents from "./reactFolder/ReactEvents";
import VirtualDom from "./reactFolder/VirtualDom";
import ReactDeveloperTools from "./reactFolder/ReactDeveloperTools";

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
            <Route exact path="/props-vs-state" component={PropsVsState} />

            <Route exact path="/react-components" component={ReactComponents} />
            <Route exact path="/what-is-jsx" component={WhatIsJSX} />
            <Route
              exact
              path="/lifecycle-methods"
              component={LifeCycleMethods}
            />
            <Route exact path="/react-events" component={ReactEvents} />
            <Route exact path="/virtual-dom" component={VirtualDom} />
            <Route
              exact
              path="/react-developer-tools"
              component={ReactDeveloperTools}
            />
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
