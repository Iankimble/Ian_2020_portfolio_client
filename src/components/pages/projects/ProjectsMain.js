import React from "react";
import { Jumbotron, Container, Card, Row, Button } from "react-bootstrap";
import style from "../../styles/foundational_style.module.css";
import { Link } from "react-router-dom";

const ProjectMain = () => (
  <div>
    <Container fluid style={{ textAlign: "center" }}>
      <Jumbotron className={style.pageHeader}>
        <h1>Projects</h1>
        <p></p>
      </Jumbotron>
      {/* Greenprint application*/}
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Greenprint</Card.Title>
            <Card.Text>
              Financial literacy resource that includes a variety of finance
              calculators and articles on related to financial topics.
            </Card.Text>
            <a
              href="https://keen-cray-2feb6f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">App</Button>
            </a>
            <Link to="/greenprint">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <a
              href="https://github.com/Iankimble/Greenprint_2020_client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Repo</Button>
            </a>
          </Card.Body>
        </Card>

        {/* Testament application*/}
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Testament</Card.Title>
            <Card.Text>
              Digital prayer journal that also generates a passage from the
              wisdom books to provide inspiration.
            </Card.Text>
            <a
              href="https://testament1.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">App</Button>
            </a>
            <Link to="/testament">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <a
              href="https://github.com/Iankimble/h_tmt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Repo</Button>
            </a>
          </Card.Body>
        </Card>

        {/* Black Tech Philly application*/}
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Black Tech Philly</Card.Title>
            <Card.Text>
              The home page of Black Tech Phily, a non profit organization that
              connects black and brown developers with each and tech
              oppurtunities.
            </Card.Text>
            <a
              href="https://blacktechphilly.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">App</Button>
            </a>
            <Link to="/blacktechphilly">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <a
              href="https://github.com/BlackTechPhilly/btp.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Repo</Button>
            </a>
          </Card.Body>
        </Card>

        {/*NBA Stat*/}
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>NBA Stats</Card.Title>
            <Card.Text>
              NBA player stat generator for the current season.
            </Card.Text>
            <a
              href="https://iankimble.github.io/nba-stat-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">App</Button>
            </a>

            <Link to="/civil411">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <a
              href="https://github.com/Iankimble/nba-stat-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Repo</Button>
            </a>
          </Card.Body>
        </Card>

        {/*21 Vice*/}
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>21 Vice</Card.Title>
            <Card.Text>
              Multiplayer blackjack game with a 80s action movie theme.
            </Card.Text>
            <a
              href="https://twenty-one-dice.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">App</Button>
            </a>
            <Link to="/civil411">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <a
              href="https://github.com/FlSHBONES/21-Spice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Repo</Button>
            </a>
          </Card.Body>
        </Card>

        {/*Fst brk*/}
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>FST BRK Vol.1.5</Card.Title>
            <Card.Text>
              Single player Basketball themed rock, paper, scissors game.
            </Card.Text>
            <a
              href="https://iankimble.github.io/fstbrk-1.5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">App</Button>
            </a>

            <Link to="/civil411">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <a
              href="https://github.com/Iankimble/fstbrk-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Repo</Button>
            </a>
          </Card.Body>
        </Card>

        {/* Civil 411 application*/}
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Civil411</Card.Title>
            <Card.Text>
              Political information resources that allows users to find their
              voting centers and provides information on local and federal
              representatives.
            </Card.Text>

            <Button variant="primary">App</Button>
            <Link to="/civil411">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <Button variant="primary">Repo</Button>
          </Card.Body>
        </Card>

        {/*Track-N-Go application */}
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Track-N-Go</Card.Title>
            <Card.Text>
              CRUD application that allows users to save, edit, and track and
              remove orders based on their orders tracking number.
            </Card.Text>

            <Button variant="primary">App</Button>
            <Link to="/civil411">
              {/* <Button variant="primary">Brief</Button> */}
            </Link>
            <Button variant="primary">Repo</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </div>
);

export default ProjectMain;
