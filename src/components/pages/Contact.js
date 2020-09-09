import React, { Component } from "react";
import {
  Jumbotron,
  Col,
  Row,
  Container,
  Form,
  Button,
  Image,
} from "react-bootstrap";
class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = () => {};

  submitForm = () => {};

  contactForm = () => <div></div>;

  submissionConfirmation = () => <div></div>;

  render() {
    return (
      <div>
        <Container fluid style={{ textAlign: "center" }}>
          <Jumbotron>
            <Row>
              <Col>
                <h1>Let's connect</h1>
              </Col>
            </Row>
          </Jumbotron>
          <br />
          <Row>
            <Col sm={12} md={6}></Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "lightyellow" }}>
              <Image src="" alt=""></Image>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col sm={12} md={6}>
              <Form
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  alignContent: "center",
                }}
              >
                <Form.Group>
                  <Form.Control type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>Select a subject</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="textarea" rows="8" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
