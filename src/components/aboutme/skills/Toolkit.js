import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  const tools = [
    { src: vs, alt: "Visual Studio", width: "85%", height: "85%" },
    { src: git, alt: "Git", width: "85%", height: "85%" },
    { src: github, alt: "GitHub", width: "85%", height: "85%", filter: "grayscale(1) invert(1)" },
    { src: pm, alt: "Package Manager", width: "95%", height: "95%" },
    { src: chrome, alt: "Google Chrome", width: "95%", height: "95%" },
  ];

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {tools.map((tool, index) => (
            <Col key={index} xs={4} md={2} className="tech-icons">
              <img src={tool.src} alt={tool.alt} style={{ width: tool.width, height: tool.height, ...(tool.filter && { filter: tool.filter }) }} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
