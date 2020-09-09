import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Container fluid style={{ textAlign: "center" }}>
      <Row style={{ background: "lightblue", margin: "5px" }}>
        <Col xs={12}>
          <Carousel>
            <Carousel.Item style={{ height: "50vh" }}>
              <Col style={{ backgroundColor: "gray" }}>
                <img
                  src=""
                  alt="First slide"
                  style={{
                    backgroundColor: "lightyellow",
                  }}
                />
              </Col>
              <Carousel.Caption>
                <Col style={{ backgroundColor: "pink" }}>
                  <h1>Welcome to My Portfolio</h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Col>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "50vh" }}>
              <img src="" alt="Second slide" />
              <Carousel.Caption>
                <h1>MERN Stack Expert</h1>
                <p>
                  Check out my projects by clicking the link or check out my
                  repo
                </p>
                <Button> View Projects</Button>
                <Button> Visit Github</Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "50vh" }}>
              <img src="" alt="Third slide" />
              <Carousel.Caption>
                <h1>Learn more about me</h1>
                <p>follow the link to get a better picture of me</p>
                <Button>About me</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link>LinkedIn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Github</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Twitter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                ian.kimble571@gmail.com
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row style={{ background: "", margin: "5px" }}>
        <Col xs={12} md={6}>
          <h1>Recent</h1>
          <Card style={{ margin: "10px", background: "lightyellow" }}>
            <Row style={{ margin: "5px", textAlign: "center" }}>
              <Col xs={12} sm="auto" md={12} lg={6} xl={6} style={{}}>
                <img
                  src=""
                  alt=""
                  style={{
                    height: "50%",
                    width: "50%",
                    background: "pink",
                  }}
                />
              </Col>
              <Col
                xs={12}
                md={12}
                lg={6}
                xl={6}
                style={{ width: "auto", height: "auto" }}
              >
                <h1>Title</h1>
                <Link to="">
                  <Button>
                    Continue Reading
                    <br />
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card>
          <Button> Continue to Blog</Button>
        </Col>
        <Col xs={12} md={6}>
          <h1>Twitter</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
