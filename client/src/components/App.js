import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import FunctionalVsClass from "./reactComponents/FunctionalVsClass";
import WhatIsJSX from "./reactComponents/WhatIsJSX";
import ReactComponents from "./reactComponents/ReactComponents";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp as thumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as thumbsUpRegular } from "@fortawesome/free-regular-svg-icons";
import PropsVsState from "./reactComponents/PropsVsState";
import LifeCycleMethods from "./reactComponents/LifeCycleMethods";
import ReactEvents from "./reactComponents/reactComponents/ReactEvents";
import VirtualDom from "./reactComponents/reactComponents/VirtualDom";
import ReactDeveloperTools from "./reactComponents/reactComponents/ReactDeveloperTools";

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
