import React from "react";

import ReactComponents from "./ReactComponents";
import WhatIsJSX from "./WhatIsJSX";
import FunctionalVsClass from "./FunctionalVsClass";
import State from "./State";
import Props from "./Props";
import LessonTitle from "../teachingComponents/LessonTitle";
import EventsFunctional from "./events/EventsFunctional";
import EventsClass from "./events/EventsClass";
import Mounting from "./lifeCycle/Mounting";
import VirtualDom from "./virtualDom/VirtualDom";

class ReactMaster extends React.Component {
  render() {
    return (
      <>
        <WhatIsJSX />
        <ReactComponents />
        <FunctionalVsClass />
        <State />
        <Props />
        <LessonTitle hash="events" title="Events" />
        <EventsFunctional />
        <EventsClass />
        <LessonTitle hash="lifecycle" title="LifeCycle Methods" />
        <Mounting />
        <LessonTitle hash="virtualDom" title="Virtual DOM" />
        <VirtualDom />
      </>
    );
  }
}

export default ReactMaster;
