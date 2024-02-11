import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";

export default function PersonalSkill() {
  const skills = [
    { name: "Communication Skills", color: "#fe3e57", value: 75 },
    { name: "Problem Solving", color: "#ff8c2f", value: 80 },
    { name: "Analytical Abilities", color: "#f1f965", value: 70 },
    { name: "Organization", color: "#ff0173", value: 80 },
    { name: "Creativity", color: "#39c4ff", value: 90 },
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
      <LightSpeed left cascade>
        <h1 className="mt-4">Personal Skills</h1>
      </LightSpeed>
      <div className="mt-4">
        <Container>
          <Row className="g-5">
            {skills.map((skill, index) => (
              <Col key={index} md={4}>
                <h1
                  style={{
                    fontSize: "100px",
                    color: skill.color,
                    fontWeight: 700,
                  }}
                >
                  {skill.value}%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      role="progressbar"
                      id={`skill-${index}`}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                  <h2
                    style={{
                      color: skill.color,
                      fontSize: "25px",
                      marginTop: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {skill.name}
                  </h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
