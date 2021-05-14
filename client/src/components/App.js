import React, { Component } from "react";
import ScrollToTop from "./ScrollToTop";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

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
import NewNavigation from "./NewNavigation";
import NewTopNav from "./NewTopNav";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faAlignLeft,
  faThumbsUp as thumbsUpSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as thumbsUpRegular } from "@fortawesome/free-regular-svg-icons";

library.add(fab, thumbsUpSolid, thumbsUpRegular, faAlignLeft, faReact);

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Container>
          <NavigationBar />

          <Row>
            <Col lg={12}>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/react" component={ReactMaster} />
                <Route exact path="/javascript" component={JavaScriptMaster} />
                <Route exact path="/redux" component={ReduxMaster} />
                <Route exact path="/libraries" component={LibrariesMaster} />
              </Switch>

              <Row>
                <Footer />
              </Row>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
