import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  DiJavascript,
  DiHtml5,
  DiCss3Full,
  DiReact,
  DiBootstrap,
  DiNpm,
  DiNodejsSmall,
  DiMysql,
  DiMongodb,
} from "react-icons/di";
import { SiTailwindcss, SiExpress, SiApollographql } from "react-icons/si";

import "./tech.css";

const Technologies = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <h1>Technologies</h1>
      <Row>
        <Col>
          <Row>
            <h2>Front-End</h2>
            <Col xs="4">
              <DiHtml5 className="logo" />
            </Col>
            <Col xs="4">
              <DiCss3Full className="logo" />
            </Col>
            <Col xs="4">
              <SiTailwindcss className="logo" />
            </Col>
            <Col>
              <DiReact className="logo" />
            </Col>
            <Col>
              <DiBootstrap className="logo" />
            </Col>
            <Col>
              <DiNpm className="logo" />
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <h2>Back-End</h2>
            <Col xs="4">
              <DiJavascript className="logo" />
            </Col>
            <Col xs="4">
              <DiNodejsSmall className="logo" />
            </Col>
            <Col xs="4">
              <DiMysql className="logo" />
            </Col>
            <Col>
              <DiMongodb className="logo" />
            </Col>
            <Col>
              <SiExpress className="logo" />
            </Col>
            <Col>
              <SiApollographql className="logo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
