import React, { Component } from "react";
import { contactMe } from "../../API";

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
    this.state = {
      to: "ian.kimble571@gmail.com",
      name: "",
      from: "",
      subject: "",
      text: "",
      error: "",
      displayForm: true,
      displayConfirmation: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { to, from, subject, text } = this.state;
    const msg = {
      to,
      from,
      subject,
      text,
    };
    contactMe(msg).then((msg) => {
      if (msg.error) this.setState({ eror: msg.error });
      else
        this.setState({
          error: "",
          from: "",
          subject: "",
          text: "",
        });
    });

    this.setState({ displayConfirmation: true, displayForm: false });
  };

  contactForm = (name, from, text, subject) => (
    <div>
      <Container fluid style={{ textAlign: "center" }}>
        <Row>
          <Col sm={12} md={6}></Col>
        </Row>
        <Row>
          <Col style={{ backgroundColor: "lightyellow" }}>
            <Image src="" alt=""></Image>
            <p>
              Have a project idea, Open to freelance and part time and fulltime
              oppurtunities. But if you have a question leave a message.
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
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={this.handleChange("name")}
                  value={name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange("from")}
                  value={from}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control
                  as="select"
                  title="Subject"
                  value={text}
                  placeholder="select"
                  onChange={this.handleChange("subject")}
                >
                  <option>Select a subject</option>
                  <option>I am interested in a javascript/ react tutor</option>
                  <option>
                    I would like to speak about an employment oppurtunity
                  </option>
                  <option>I have a general inquiry</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="8"
                  placeholder="Write your message here..."
                  onChange={this.handleChange("text")}
                  value={subject}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                size="lg"
                block
                onClick={this.submitForm}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );

  submissionConfirmation = () => (
    <div>
      <h1> Thanks</h1>
      <p>Your message has been sent.</p>
    </div>
  );

  render() {
    const { name, from, subject, text } = this.state;
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
        </Container>
        {this.state.displayForm ? (
          <Col>{this.contactForm(name, from, subject, text)}</Col>
        ) : null}
        {this.state.displayConfirmation ? (
          <Col>{this.submissionConfirmation()}</Col>
        ) : null}
      </div>
    );
  }
}

export default Contact;
