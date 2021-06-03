import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavbarHash = (props) => {
  return (
    <Link smooth to={props.route} scroll={(el) => scrollWithOffset(el)}>
      {props.name}
    </Link>
  );
};

export default NavbarHash;
