import React from "react";
import { Jumbotron, Container, Card, Row, Button } from "react-bootstrap";
const ProjectMain = () => (
  <div>
    <Container fluid style={{ textAlign: "center" }}>
      <Jumbotron>
        <h1>Projects</h1>
        <p> Cards that link to individual project page</p>
      </Jumbotron>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">App</Button>
            <Button variant="primary">Brief</Button>
            <Button variant="primary">Github</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">App</Button>
            <Button variant="primary">Brief</Button>
            <Button variant="primary">Github</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">App</Button>
            <Button variant="primary">Brief</Button>
            <Button variant="primary">Github</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">App</Button>
            <Button variant="primary">Brief</Button>
            <Button variant="primary">Github</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">App</Button>
            <Button variant="primary">Brief</Button>
            <Button variant="primary">Github</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </div>
);

export default ProjectMain;
