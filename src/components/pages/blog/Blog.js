import React from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import BlogData from "./BlogData";
import style from "../../styles/foundational_style.module.css";

const Blog = () => (
  <div>
    <Container fluid style={{ textAlign: "center" }}>
      <Jumbotron className={style.pageHeader}>
        <Row>
          <Col>
            <h1>Ian's Blog</h1>
          </Col>
          <br />
        </Row>
      </Jumbotron>
      <BlogData />
    </Container>
  </div>
);

export default Blog;
