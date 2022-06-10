import React from "react";
import { Row, Col, Card, CardText, CardBody, Button } from "reactstrap";
import "./work.css";
const Projects = (props) => {
  return (
    <Row id="projects">
      <h1>Projects</h1>
      <Col xs="3" md={{ offset: 3 }}>
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <CardBody id="p1">
            <CardText></CardText>
            <Button href="https://kaitdiaz01.github.io/Find-A-Flick/">
              FIND-A-FLICK
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col xs="3">
        <Card style={{ width: "20rem", height: "20rem", border: "none" }}>
          <image src="../../assets/find-a-flick.png" alt="Card image cap" />
          <image />
          <CardBody id="p2">
            <CardText></CardText>
            <Button href="https://github.com/kaitdiaz01/The-19th-Hole">
              THE-19TH-HOLE
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Projects;
