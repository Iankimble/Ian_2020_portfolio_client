import React from "react";
import { Jumbotron, Container, Col, Row, Image } from "react-bootstrap";
const About = () => (
  <div>
    <Container fluid style={{ textAlign: "center" }}>
      <Jumbotron>
        <Row>
          <Col>
            <h1>About Me</h1>
          </Col>
          <br />
        </Row>
      </Jumbotron>
      <Row>
        <Col lg={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col lg={6} style={{ background: "lightyellow" }}>
          <h1>Ian</h1>
          <Image src="" alt=""></Image>
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
