import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Aboutme.css";

const Aboutme = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container id="aboutme">
      <Row>
        <h1 className="typewriter">Welcome to my portfolio</h1>
        <div>
          <Col xs="auto">
            My name is Kaitlyn Diaz, I'm 24 years old and I'm a fullstack
            developer who loves to solve probelms and a good challenge. I enjoy
            front-end development because I love adding my own touch to the
            design process. My goal is to make apps that will make the user
            experience fun and easy. I want to continue to develop my skills in
            coding so I can further enhance my knowledge since there is always
            more to learn. in this coding bootcamp!
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Aboutme;
