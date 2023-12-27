import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3} className="col-sm-12 col-md-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Shopping Add to Cart
                    </h5>
                    <img src="./shopping.jpeg" alt={'shopping.jpeg'} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/shahzad713/React-Add-To-Cart"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
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
                      'Add to Cart' System Project: In a separate project, I
                      implemented a user-friendly 'add to cart' system using
                      TypeScript. It enhances the shopping experience. Type
                      Safety: TypeScript ensures type safety, reducing errors
                      and improving code reliability. Customization: The system
                      is easily customizable for different product types and
                      options.
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
                    HTML, CSS, JavaScript, React js, TypeScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} className="col-sm-12 col-md-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      React CRUD API
                    </h5>
                    <img src="./api.png" alt={'api.png'} />
                    <div className="project--showcaseBtn">
                      <a
                        href={" https://github.com/shahzad713/React_Api"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
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
                      Developed a React-based dynamic form for seamless user
                      addition, utilizing state management and Axios for server
                      communication. Created an update page for intuitive data
                      modification. Implemented a detailed view for user
                      information and developed a central hub for user
                      management, showcasing proficiency in React, state
                      management, and API interactions, ensuring scalability and
                      efficiency.
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
                    React js, Rest Api, Css
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} className="col-sm-12 col-md-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProjectPage"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectPageContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Crypto-App
                    </h5>
                    <img src={"./crypto.png"} alt={'crypto.png'} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://xcrypto-app-react.vercel.app/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
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
                      visualization, and API integration. 🚀 The app offers
                      cryptocurrency price tracking. 💹 It provides interactive
                      historical data analysis. 🌟 The user-friendly interface
                      enhances the experience. It's built with React,
                      JavaScript, CSS, and chart.js
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
                    HTML, CSS, JavaScript, React js
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
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
