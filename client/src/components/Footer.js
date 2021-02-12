import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="footer border-top">
      <Row>
        <Col>
          Find me on LinkedIn and Github
          <span className="ml-3"></span>
          <a
            href="https://www.linkedin.com/in/seanbiller/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
          </a>
          <span className="ml-3"></span>
          <a
            href="https://github.com/seanbiller"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </a>
        </Col>
        <span className="border-right"></span>

        <Col>
          <p>
            <a href="tel:704-962-1296">Contact Me: (704)-962-1296</a>
            <span className="ml-3 border-right"></span>

            <a className="ml-3" href="mailto:seanmbiller@gmail.com">
              Email Me: seanmbiller@gmail.com
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
