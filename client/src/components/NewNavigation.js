import React from "react";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewNavigation extends React.Component {
  render() {
    return (
      <nav className="sidebar h-100">
        <ul className="side-nav">
          <li className="side-nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="side-nav__item">
            <Link to="/react">React</Link>
          </li>
          <li className="side-nav__item">
            <Link to="/redux">Redux</Link>
          </li>
          <li className="side-nav__item">
            <Link to="/javascript">JavaScript</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NewNavigation;
