import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";


import shoppingImage from "../../images/shopping.jpeg";
import apiImage from "../../images/api.png";
import cryptoImage from "../../images/crypto.png";

const projects = [
  {
    title: "Shopping Add to Cart",
    description:
      "Add to Cart' System Project: In a separate project, I implemented a user-friendly 'add to cart' system using TypeScript. It enhances the shopping experience. Type Safety: TypeScript ensures type safety, reducing errors and improving code reliability. Customization: The system is easily customizable for different product types and options.",
    languages: ["HTML", "CSS", "JavaScript", "React js", "TypeScript"],
    githubLink: "https://github.com/shahzad713/React-Add-To-Cart",
    image: shoppingImage,
  },
  {
    title: "React CRUD API",
    description:
      "Developed a React-based dynamic form for seamless user addition, utilizing state management and Axios for server communication. Created an update page for intuitive data modification. Implemented a detailed view for user information and developed a central hub for user management, showcasing proficiency in React, state management, and API interactions, ensuring scalability and efficiency.",
    languages: ["React js", "Rest Api", "Css"],
    githubLink: "https://github.com/shahzad713/React_Api",
    image: apiImage,
  },
  {
    title: "Crypto-App",
    description:
      "visualization, and API integration. 🚀 The app offers cryptocurrency price tracking. 💹 It provides interactive historical data analysis. 🌟 The user-friendly interface enhances the experience. It's built with React, JavaScript, CSS, and chart.js",
    languages: ["HTML", "CSS", "JavaScript", "React js"],
    githubLink: "https://xcrypto-app-react.vercel.app/",
    image: cryptoImage,
  },
];

const ProjectItem = ({ project }) => {
  return (
    <div
      key={project.title}
      className="singleProject"
      style={{
        backgroundColor: "rgb(142 70 186 / 31%)",
        border: "1px solid",
      }}
    >
      <div className="projectContent">
        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
          {project.title}
        </h5>
        <img src={project.image} alt={project.title} />
        <div className="project--showcaseBtn">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className={"iconBtn"}
            aria-labelledby={`code`}
          >
            <FaCode id={`code`} className={"icon"} aria-label="Code" />
          </a>
        </div>
      </div>
      <h6>
        <p
          className="project--desc"
          style={{
            background: "#fbd9ad",
            color: "#b061df",
            fontWeight: 600,
          }}
        >
          {project.description}
        </p>
      </h6>
      <div
        className="project--lang"
        style={{
          background: "#fbd9ad",
          color: "#b061df",
          fontWeight: 600,
        }}
      >
        {project.languages.join(", ")}
      </div>
    </div>
  );
};


export default function Projects() {
  return (
    <Container fluid className="certificate-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="certificate-description d-flex justify-content-start">
            <Zoom left cascade>
              <h1 className="aboutme-heading">Projects</h1>
            </Zoom>
          </Col>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="col-sm-12 col-md-4">
              <Fade bottom>
                <ProjectItem project={project} />
              </Fade>
            </Col>
          ))}
        </Row>
        <div className="blog--viewAll">
          <Link to="/projectspage">
            <Button className="btn btn-primary">
              View All <HiArrowRight className="viewArr" />
            </Button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}
