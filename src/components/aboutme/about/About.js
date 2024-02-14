import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={2000}>
              <p className="home-about-body">
                My name is <b className="purple">Shahzad Munir </b> and I am a{" "}
                <b className="purple"> Front End | React js Developer </b>
                <br />
                <br />I have great expertise in these &nbsp;
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, React js, Bootstrap, TypeScript,
                  Grpahql, MetrialUi, React testing library, Python{" "}
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with &nbsp;
                <b className="purple"> Modern JavaScript Library and Frameworks.</b>
                <br />
                <br />
                In my downtime, I'm passionate about exploring cutting-edge
                technologies and <b className="purple">crafting innovative web solutions.</b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
