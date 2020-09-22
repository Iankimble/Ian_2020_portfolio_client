import React, { Component } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getBlogContent } from "../../../API";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import style from "../../styles/foundational_style.module.css";
import { Fade } from "react-reveal";
import moment from "moment";

export class BlogData extends Component {
  constructor() {
    super();
    this.state = {
      blog: [],
      error: false,
      perPage: 2,
      isLoading: true,
    };
  }

  loadMore = () => {
    this.setState({
      perPage: this.state.perPage + 2,
    });
  };

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
      });
    });
  }

  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    let dataList = this.state.blog.slice(0, this.state.perPage).map((post) => {
      return (
        <div key={post.id}>
          <Fade top>
            <Container>
              <Row style={{ margin: "0px" }}>
                <Card style={{ margin: "10px", background: "" }}>
                  <Row style={{ margin: "5px", textAlign: "center" }}>
                    <Col xs={12} sm="auto" md={12} lg={6} xl={6} style={{}}>
                      <img
                        src=""
                        alt="Blog"
                        style={{
                          height: "100%",
                          width: "100%",
                          background: "",
                        }}
                      />
                    </Col>
                    <Col
                      xs={12}
                      md={12}
                      lg={6}
                      xl={6}
                      style={{ width: "auto", height: "auto" }}
                      key={post.id}
                    >
                      <h1>{post.title}</h1>
                      <b>{moment(post.date).format("MMMM Do YYYY")}</b>
                      <br />
                      <p>
                        {post.blurb}
                        <br />
                        <br />
                        <Link to={`/blog/${post.id}`}>
                          <Button className={style.globalButton}>
                            Read More
                            <br />
                          </Button>
                        </Link>
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </Container>
          </Fade>
        </div>
      );
    });
    if (this.state.isLoading === true) {
      return (
        <div>
          {this.loadingData()}
          <div className="sweet-loading">
            <BounceLoader
              css={override}
              size={250}
              color={"#319592"}
              loading={this.state.loading}
            />
          </div>
          <br />
        </div>
      );
    } else {
      return (
        <div>
          {dataList}
          <Row style={{ margin: "50px" }}>
            <Col style={{ textAlign: "center" }}>
              <Button
                size="lg"
                block
                onClick={this.loadMore}
                className={style.globalButton}
              >
                Load More
              </Button>
            </Col>
          </Row>
        </div>
      );
    }
  }
}
export default BlogData;
