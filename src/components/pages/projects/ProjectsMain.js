import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Card,
  Row,
  Button,
  Modal,
} from "react-bootstrap";
import style from "../../styles/foundational_style.module.css";
import { Link } from "react-router-dom";

function ProjectMain() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    //Modal for  prompting user that an application is under construction/ still in development.
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>App Under Construction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This app is still being worked on and will be up very soon. In the
          mean time, you can keep track with it's progress via the github
          button.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className={style.globalButton}
            style={{ margin: "5px", width: "100px" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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
              <Card.Text className={style.cardBody}>
                Financial literacy resource that includes a variety of finance
                calculators and articles on related to financial topics.
              </Card.Text>
              <a
                href="https://keen-cray-2feb6f.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  App
                </Button>
              </a>
              <Link to="/greenprint">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>
              <a
                href="https://github.com/Iankimble/Greenprint_2020_client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>

          {/* Testament application*/}
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Testament</Card.Title>
              <Card.Text className={style.cardBody}>
                Digital prayer journal that also generates a passage from the
                wisdom books to provide inspiration.
              </Card.Text>
              <a
                href="https://testament-server.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  App
                </Button>
              </a>
              <Link to="/testament">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>
              <a
                href="https://github.com/Iankimble/Testament_2019_server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>

          {/* Black Tech Philly application*/}
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Black Tech Philly</Card.Title>
              <Card.Text className={style.cardBody}>
                The home page of Black Tech Phily, a non profit organization
                that connects black and brown developers with each and tech
                oppurtunities.
              </Card.Text>
              <a
                href="https://blacktechphilly.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  App
                </Button>
              </a>
              <Link to="/blacktechphilly">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>
              <a
                href="https://github.com/BlackTechPhilly/btp.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>

          {/*NBA Stat*/}
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>NBA Stats</Card.Title>
              <Card.Text className={style.cardBody}>
                NBA player stat generator for the current season.
              </Card.Text>
              <a
                href="https://iankimble.github.io/nba-stat-react/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  App
                </Button>
              </a>

              <Link to="/civil411">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>
              <a
                href="https://github.com/Iankimble/nba-stat-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>

          {/*21 Vice*/}
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>21 Vice</Card.Title>
              <Card.Text className={style.cardBody}>
                Multiplayer blackjack game with a 80s action movie theme.
              </Card.Text>
              <a
                href="https://twenty-one-dice.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  App
                </Button>
              </a>
              <Link to="/civil411">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>
              <a
                href="https://github.com/FlSHBONES/21-Spice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>

          {/*Fst brk*/}
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>FST BRK Vol.1.5</Card.Title>
              <Card.Text className={style.cardBody}>
                Single player Basketball themed rock, paper, scissors game.
              </Card.Text>
              <a
                href="https://iankimble.github.io/fstbrk-1.5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  App
                </Button>
              </a>

              <Link to="/">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>
              <a
                href="https://github.com/Iankimble/fstbrk-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>

          {/* Civil 411 application*/}
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Civil 411</Card.Title>
              <Card.Text className={style.cardBody}>
                Political information resources that allows users to find their
                voting centers and provides information on local and federal
                representatives.
              </Card.Text>
              <a
                href="https://romantic-swirles-e7e20c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  // onClick={handleShow}
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  App
                </Button>
              </a>
              <Link to="/civil411">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>

              <a
                href="https://github.com/Iankimble/civil_411_client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>

          {/*Track-N-Go application */}
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Track-N-Go</Card.Title>
              <Card.Text className={style.cardBody}>
                CRUD application that allows users to save, edit, and track and
                remove orders based on their orders tracking number.
              </Card.Text>

              <Button
                variant="primary"
                onClick={handleShow}
                className={style.globalButton}
                style={{ margin: "5px", width: "100px" }}
              >
                App
              </Button>
              <Link to="/civil411">
                {/* <Button variant="primary">Brief</Button> */}
              </Link>

              <a
                href="https://github.com/Iankimble/Tracking_n_go_client_2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className={style.globalButton}
                  style={{ margin: "5px", width: "100px" }}
                >
                  Repo
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectMain;
