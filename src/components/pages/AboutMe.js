import React from "react";
import { Jumbotron, Container, Col, Row, Image } from "react-bootstrap";
import style from "../styles/foundational_style.module.css";
import { Fade } from "react-reveal";
import Ian from "../styles/IanKimblePhotogreen.png";

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
              Dedicated and ambitious MERN stack web developer and designer with
              a culmination of over 2 years of experience tutoring, teaching,
              providing professional guidance and consultation, and contributing
              code to start up companies and organizations. Currently seeking to
              contribute my unique experiences and skill sets into a full time
              web developer role.
            </p>
          </Fade>
        </Col>
        <Col lg={6} style={{ background: "" }}>
          <Fade right>
            {/* <h1>Ian</h1> */}
            <img src={Ian} alt="Ian Kimble" className={style.ianImg} />
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
