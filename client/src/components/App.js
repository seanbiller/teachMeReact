import React, { Component } from "react";
import ScrollToTop from "./navbars/ScrollToTop";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./navbars/NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

import ReactMaster from "./reactFolder/ReactMaster";
import JavaScriptMaster from "./javaScriptComponents/JavaScriptMaster";
import LibrariesMaster from "./libraries/LibrariesMaster";
import ReduxMaster from "./reduxComponents/ReduxMaster";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faAlignLeft,
  faThumbsUp as thumbsUpSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as thumbsUpRegular } from "@fortawesome/free-regular-svg-icons";
import LeftSideNavbar from "./navbars/LeftSideNavbar";
import ReactHashSidebar from "./navbars/ReactHashSidebar";

library.add(fab, thumbsUpSolid, thumbsUpRegular, faAlignLeft, faReact);

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="no-bootstrap-container">
          <div className="header">
            <NavigationBar />
          </div>
          <div className="nav">
            <LeftSideNavbar />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/react" component={ReactMaster} />
              <Route exact path="/javascript" component={JavaScriptMaster} />
              <Route exact path="/redux" component={ReduxMaster} />
              <Route exact path="/libraries" component={LibrariesMaster} />
            </Switch>
          </div>
          <div className="hash-nav">
            <Switch>
              <Route exact path="/react" component={ReactHashSidebar} />
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
