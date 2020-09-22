import React from "react";
import { Jumbotron, Container, Col, Row, Image } from "react-bootstrap";
import style from "../styles/foundational_style.module.css";
import { Fade } from "react-reveal";

const About = () => (
  <div>
    <Container fluid style={{ textAlign: "center" }}>
      <Jumbotron className={style.pageHeader}>
        <Row>
          <Col>
            <h1>About Me</h1>
          </Col>
          <br />
        </Row>
      </Jumbotron>
      <Row>
        <Col lg={6}>
          <Fade left>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>skills</p>
          </Fade>
        </Col>
        <Col lg={6} style={{ background: "" }}>
          <Fade right>
            <h1>Ian</h1>
            <Image src="" alt=""></Image>
          </Fade>
        </Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
      </Row>
    </Container>
  </div>
);

export default About;
