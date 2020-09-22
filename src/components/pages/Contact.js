import React, { Component } from "react";
import { contactMe } from "../../API";
import style from "../styles/foundational_style.module.css";
import {
  Jumbotron,
  Col,
  Row,
  Container,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { Fade } from "react-reveal";

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
          <Col style={{ backgroundColor: "" }}>
            <Fade left>
              <Image src="" alt=""></Image>
              <p style={{ fontSize: "24px" }}>
                Whether it's a web application, knowledge, or relationships; I'm
                always looking to build, share and exchange to become a better
                developer and even better person. Send me a messge if you're
                interested in starting a conversation and I'll be in touch with
                you as soon as I can.
              </p>
            </Fade>
          </Col>
          <Col sm={12} md={6}>
            <Fade right>
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
                    <option>
                      I am interested in a javascript/ react tutor
                    </option>
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
                  className={style.globalButton}
                >
                  Submit
                </Button>
              </Form>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );

  submissionConfirmation = () => (
    <Row>
      <Col>
        <Fade bottom>
          <div style={{ textAlign: "center" }}>
            <h1> Thanks</h1>
            <p>Your message has been sent.</p>
          </div>
        </Fade>
      </Col>
    </Row>
  );

  render() {
    const { name, from, subject, text } = this.state;
    return (
      <div>
        <Container fluid style={{ textAlign: "center" }}>
          <Jumbotron className={style.pageHeader}>
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
        <br />
      </div>
    );
  }
}

export default Contact;
