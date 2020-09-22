import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Jumbotron,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../styles/foundational_style.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { getBlogContent } from "../../API";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      blog: [],
      error: false,
      isLoading: true,
      latestPost: "",
    };
  }

  loadingData = () => (
    <div>
      <img src="" alt="" style={{}} />
      <h1>
        <i>Loading...</i>
      </h1>
      <br />
    </div>
  );

  componentDidMount() {
    getBlogContent().then((data) => {
      if (data.error) {
        this.setState({
          error: true,
        });
      }
      this.setState({
        blog: data.reverse(),
        isLoading: false,
        latestPost: this.state.blog[0],
      });
    });
  }

  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    /* RETURNS LOADING COMPONENTS*/
    if (!this.state.blog[0]) {
      return (
        <div>
          <Container fluid style={{ textAlign: "center" }}>
            <Row>
              <Col xs={12}>
                <Jumbotron>
                  <h1>Welcome</h1>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav
                  className="justify-content-center"
                  style={{ margin: "25px" }}
                >
                  <Nav.Item className={style.subNavLinks}>
                    <a
                      href="https://www.linkedin.com/in/iank6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Nav.Item>
                  <Nav.Item className={style.subNavLinks}>
                    <a
                      href="https://github.com/Iankimble"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </Nav.Item>
                  <Nav.Item className={style.subNavLinks}>
                    <a
                      href="https://twitter.com/KimbleDev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            <Row style={{ background: "", margin: "5px" }}>
              <Col xs={12} md={6}>
                <h1>Latests</h1>
                <div className="sweet-loading">
                  <BounceLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={this.state.loading}
                  />
                </div>
                {this.loadingData()}
              </Col>

              <Col xs={12} md={6}>
                <h1>Twitter</h1>
                <div>
                  <div className="centerContent">
                    <div className="selfCenter spaceBetween standardWidth">
                      <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="KimbleDev"
                        theme="light"
                        options={{ height: 400 }}
                        noScrollbar
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      /* RETURNS DATA FROM API and Twitter*/
      return (
        <div>
          <Container fluid style={{ textAlign: "center" }}>
            <Row>
              <Col xs={12}>
                <Jumbotron>
                  <h1>Welcome</h1>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav
                  className="justify-content-center"
                  style={{ margin: "25px" }}
                >
                  <Nav.Item className={style.subNavLinks}>
                    <a
                      href="https://www.linkedin.com/in/iank6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Nav.Item>
                  <Nav.Item className={style.subNavLinks}>
                    <a
                      href="https://github.com/Iankimble"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </Nav.Item>
                  <Nav.Item className={style.subNavLinks}>
                    <a
                      href="https://twitter.com/KimbleDev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row style={{ background: "", margin: "5px" }}>
              <Col xs={12} md={6}>
                <h1>Latests</h1>

                <Card
                  style={{
                    margin: "10px",
                    background: " ",
                    height: 350,
                  }}
                >
                  <Row style={{ margin: "5px", textAlign: "center" }}>
                    <Col xs={12} sm="auto" md={12} lg={6} xl={6} style={{}}>
                      <img
                        src=""
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          background: " ",
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
                      <h1>{this.state.blog[0].title}</h1>
                      <h4>{this.state.blog[0].date}</h4>
                      <p>{this.state.blog[0].blurb}</p>
                      <br />
                      <Link to={`/blog/${this.state.blog[0].id}`}>
                        <Button size="lg" block>
                          Continue Reading
                          <br />
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Card>
                <Link to="/blog">
                  <Button size="lg" block>
                    Continue to Blog
                  </Button>
                </Link>
              </Col>
              <Col xs={12} md={6}>
                <h1>Twitter</h1>

                <div className="centerContent">
                  <div className="selfCenter spaceBetween standardWidth">
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="KimbleDev"
                      theme="light"
                      options={{ height: 400 }}
                      noScrollbar
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Home;
