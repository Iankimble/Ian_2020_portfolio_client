import React from "react";
import {
  Jumbotron,
  Container,
  Col,
  Row,
  Card,
  CardGroup,
} from "react-bootstrap";
import style from "../styles/foundational_style.module.css";
import { Fade } from "react-reveal";
import Ian from "../styles/IanKimblePhotogreen.png";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
  DiWordpress,
  DiBootstrap,
  DiMysql,
  DiGithubAlt,
} from "react-icons/di";

import { SiStrapi, SiGraphql } from "react-icons/si";

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
            <img src={Ian} alt="Ian Kimble" className={style.ianImg} />
          </Fade>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Fade bottom>
            <CardGroup>
              {/*HTML Card*/}
              <Card>
                <DiHtml5
                  color="#DE4E25"
                  size="6em"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>HTML</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*CSS Card*/}
              <Card>
                <DiCss3
                  size="6em"
                  color="#3596D0"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>CSS</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*Bootstrap Card*/}
              <Card>
                <DiBootstrap
                  size="6em"
                  color="#3596D0"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Bootstrap</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*JavScript Card*/}
              <Card>
                <DiJavascript1
                  size="6em"
                  color="F0D91D"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*Node Card*/}
              <Card>
                <DiNodejsSmall
                  size="6em"
                  color="8CC03C"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Node</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*MongoDB Card*/}
              <Card>
                <Card.Body>
                  <DiMongodb
                    size="6em"
                    color="63A953"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "50%",
                    }}
                  />
                  <Card.Title>MongoDB</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>

            <CardGroup>
              {/*MySQL Card*/}
              <Card>
                <DiMysql
                  size="6em"
                  color="5ED4F4"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>MySQL</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*React Card*/}
              <Card>
                <DiReact
                  size="6em"
                  color="5ED4F4"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*Strapi Card*/}
              <Card>
                <SiStrapi
                  size="6em"
                  color="5ED4F4"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Strapi</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*Graphql Card*/}
              <Card>
                <SiGraphql
                  size="6em"
                  color="5ED4F4"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Graphql</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*Github Card*/}
              <Card>
                <DiGithubAlt
                  size="6em"
                  color="5ED4F4"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Github</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>

              {/*Wordpress Card*/}
              <Card>
                <DiWordpress
                  size="6em"
                  color="207297"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Wordpress</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Fade>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
