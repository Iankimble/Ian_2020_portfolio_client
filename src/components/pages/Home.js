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
import { Fade } from "react-reveal";
import moment from "moment";

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
                <Fade top>
                  <Jumbotron className={style.pageHeaderHome}>
                    <Row>
                      <Col lg={6} md={6}>
                        Hi
                      </Col>
                      <Col lg={6} md={6}>
                        <h1>Welcome</h1>
                      </Col>
                    </Row>
                  </Jumbotron>
                </Fade>
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
                      className={style.subNavLinks}
                    >
                      LinkedIn
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      href="https://github.com/Iankimble"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.subNavLinks}
                    >
                      Github
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      href="https://twitter.com/KimbleDev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.subNavLinks}
                    >
                      Twitter
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <hr />
            <Row style={{ background: "", margin: "5px" }}>
              <Col xs={12} md={6}>
                <h1>Latests</h1>
                <div className="sweet-loading">
                  <BounceLoader
                    css={override}
                    size={150}
                    color={"#319592"}
                    loading={this.state.loading}
                  />
                </div>
                {this.loadingData()}
              </Col>

              <Col xs={12} md={6}>
                <Fade right>
                  <h1>Twitter</h1>
                  <div>
                    <div className="centerContent">
                      <div className="selfCenter spaceBetween standardWidth">
                        <TwitterTimelineEmbed
                          sourceType="profile"
                          screenName="KimbleDev"
                          theme="light"
                          options={{ height: 300 }}
                          noScrollbar
                        />
                      </div>
                    </div>
                  </div>
                </Fade>
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
                <Fade top>
                  <Jumbotron className={style.pageHeaderHome}>
                    <Row>
                      <Col lg={6} md={6}></Col>
                      <Col lg={6} md={6}>
                        <h1>Welcome</h1>
                      </Col>
                    </Row>
                  </Jumbotron>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav
                  className="justify-content-center"
                  style={{ margin: "25px" }}
                >
                  <Nav.Item>
                    <a
                      href="https://www.linkedin.com/in/iank6/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.subNavLinks}
                    >
                      LinkedIn
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      href="https://github.com/Iankimble"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.subNavLinks}
                    >
                      Github
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      href="https://twitter.com/KimbleDev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.subNavLinks}
                    >
                      Twitter
                    </a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <hr />

            <Row style={{ background: "", margin: "5px" }}>
              <Col xs={12} md={6}>
                <h1>Latest</h1>
                <Fade left>
                  <Card
                    style={{
                      margin: "10px",
                      background: " ",
                      height: "auto",
                    }}
                  >
                    <Row style={{ margin: "5px", textAlign: "center" }}>
                      <Col xs={12} sm="auto" md={12} lg={6} xl={6} style={{}}>
                        <img
                          src={this.state.blog[0].imgurl}
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
                        <b>
                          <i>
                            {moment(this.state.blog[0].date).format(
                              "MMMM Do YYYY"
                            )}
                          </i>
                        </b>
                        <p>{this.state.blog[0].blurb}</p>
                        <br />
                        <Link
                          to={`/blog/${this.state.blog[0].id}`}
                          className={style.btnText}
                        >
                          <Button size="sm" className={style.globalButton}>
                            Continue Reading
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card>
                </Fade>
                <Fade rigt>
                  <Link to="/blog" className={style.btnText}>
                    <Button size="lg" block className={style.globalButton}>
                      Continue to Blog
                    </Button>
                  </Link>
                </Fade>
              </Col>

              <Col xs={12} md={6}>
                <Fade right>
                  <h1>Twitter</h1>

                  <div className="centerContent">
                    <div className="selfCenter spaceBetween standardWidth">
                      <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="KimbleDev"
                        theme="light"
                        options={{ height: 300 }}
                        noScrollbar
                      />
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Home;
