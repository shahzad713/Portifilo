import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import hacker from './ImgesCertificates/hacker.jpeg'
import IBM from './ImgesCertificates/web.jpeg'

// Reusable CertificateCard component
const CertificateCard = ({ title, subtitle, link, logo }) => (
  <Col md={4}>
    <Fade bottom duration={2000} distance="20px">
      <div className="cert-card">
        <div className="content">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <div className="cert-header" style={{ backgroundColor: "white" }}>
              {<img className="logo_img" src={logo} alt={title} />}
            </div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: "black" }}>
                Certificate
              </h3>
            </div>
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
            {title}
          </h2>
          <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
            - {subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  </Col>
);

export default function Certification() {
  const certificates = [
    { title: "Front End Development Libraries", subtitle: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/fcc32bac05a-e935-4d80-a36c-38c33051e683/front-end-development-libraries", logo: "./freecode.jpeg" },
    { title: "Javascript Algorithms Data Structures", subtitle: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/fcc32bac05a-e935-4d80-a36c-38c33051e683/javascript-algorithms-and-data-structures", logo: "./FreeCodeCamp_logo.png" },
    { title: "Responsive Web Design", subtitle: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/fcc32bac05a-e935-4d80-a36c-38c33051e683/responsive-web-design", logo: "./FreeCodeCamp_logo.png" },
    { title: "JavaScript", subtitle: "Hackerrank", link: "https://www.hackerrank.com/certificates/a79f490623c0", logo: hacker },
    { title: "Node Js", subtitle: "Hackerrank", link: "https://www.hackerrank.com/certificates/9a1f4e19ff56", logo: hacker },
    { title: "Web Development Fundamentals", subtitle: " IBM SkillsBuild", link: "https://www.credly.com/badges/2fec96ea-4318-4f40-831f-ddb857aa1953/linked_in?t=s83cju", logo: IBM },


  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                {certificates.map((cert, index) => (
                  <CertificateCard key={index} {...cert} />
                ))}
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
