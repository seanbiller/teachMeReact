import React from "react";

import ReactComponents from "./ReactComponents";
import WhatIsJSX from "./WhatIsJSX";
import FunctionalVsClass from "./FunctionalVsClass";
import State from "./State";
import Props from "./Props";
import LessonTitle from "../teachingComponents/LessonTitle";
import EventsFunctional from "./events/EventsFunctional";
import EventsClass from "./events/EventsClass";

class ReactMaster extends React.Component {
  render() {
    return (
      <React.Fragment>
        <WhatIsJSX />
        <ReactComponents />
        <FunctionalVsClass />
        <State />
        <Props />
        <LessonTitle hash="events" title="Events" />
        <EventsFunctional />
        <EventsClass />
      </React.Fragment>
    );
  }
}

export default ReactMaster;
