import React from "react";
import NavbarItem from "./navbarComponents/NavbarItem";

const LeftSideNavbar = () => {
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "React",
      route: "/react",
    },
    {
      name: "Redux",
      route: "/redux",
    },
  ];

  let result = routes.map((item) => (
    <NavbarItem
      key={item.name}
      name={item.name}
      route={item.route}
    ></NavbarItem>
  ));
  return <div className={"left-sidebar"}>{result}</div>;
};

export default LeftSideNavbar;
