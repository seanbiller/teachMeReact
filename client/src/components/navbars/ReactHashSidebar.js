import React from "react";
import { useLocation } from "react-router-dom";

import NavbarHash from "./navbarComponents/NavbarHash";

const ReactHashSidebar = () => {
  const reactRoutes = [
    {
      name: "JSX",
      route: "#jsx",
    },
    {
      name: "React Components",
      route: "#react-components",
    },
    {
      name: "Functional Vs Class",
      route: "#functional-vs-class",
    },
    {
      name: "State",
      route: "#state",
    },
    {
      name: "Props",
      route: "#props",
    },
    {
      name: "Events",
      route: "#events",
    },
    {
      name: "Lifecycle",
      route: "#lifecycle",
    },
    {
      name: "Virtual Dom",
      route: "#virtualDom",
    },
  ];

  const location = useLocation();
  console.log(location.pathname);

  let result = reactRoutes.map((item) => (
    <NavbarHash
      key={item.name}
      name={item.name}
      route={item.route}
    ></NavbarHash>
  ));
  return <div className={"right-sidebar"}>{result}</div>;
};

export default ReactHashSidebar;
