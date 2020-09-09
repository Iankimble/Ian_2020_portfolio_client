import React, { Component } from "react";
import { Jumbotron, Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Fade } from "react-reveal";

export class Blog extends Component {
  state = {};

  loadingData = () => {};

  loadMore = () => {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <Container fluid style={{ textAlign: "center" }}>
          <Jumbotron>
            <h1>Blog</h1>
          </Jumbotron>
        </Container>
        <Row style={{ margin: "50px" }}>
          <Card style={{ margin: "10px", background: "lightyellow" }}>
            <Row style={{ margin: "5px", textAlign: "center" }}>
              <Col xs={12} sm="auto" md={12} lg={6} xl={6} style={{}}>
                <img
                  src=""
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  <Link to="">
                    <Button>
                      Read More
                      <br />
                    </Button>
                  </Link>
                </p>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row style={{ margin: "50px" }}>
          <Col style={{ textAlign: "center" }}>
            <Button>Load More</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Blog;
