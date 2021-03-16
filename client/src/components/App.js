import React, { Component } from "react";
import ScrollToTop from "./ScrollToTop";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp as thumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as thumbsUpRegular } from "@fortawesome/free-regular-svg-icons";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

import ReactNavBar from "./ReactNavBar";
import Menu from "./Menu";
import ReactMaster from "./reactFolder/ReactMaster";
import JavaScriptMaster from "./javaScriptComponents/JavaScriptMaster";
import JavaScriptNavBar from "./JavaScriptNavBar";
import ReduxNavBar from "./ReduxNavBar";
import LibrariesMaster from "./libraries/LibrariesMaster";
import ReduxMaster from "./reduxComponents/ReduxMaster";
import LibrariesNavBar from "./LibrariesNavBar";

library.add(fab, thumbsUpSolid, thumbsUpRegular);

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <NavigationBar />
        <Container fluid>
          <Row>
            <Col lg={2}>
              <Menu />
            </Col>
            <Col lg={8}>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/react" component={ReactMaster} />
                <Route exact path="/javascript" component={JavaScriptMaster} />
                <Route exact path="/redux" component={ReduxMaster} />
                <Route exact path="/libraries" component={LibrariesMaster} />
              </Switch>
            </Col>
            <Col lg={2}>
              <Switch>
                <Route exact path="/react" component={ReactNavBar} />
                <Route exact path="/javascript" component={JavaScriptNavBar} />
                <Route exact path="/redux" component={ReduxNavBar} />
                <Route exact path="/libraries" component={LibrariesNavBar} />
              </Switch>
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
