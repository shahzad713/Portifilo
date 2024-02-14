import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import logo from '../../logo.jpg';
import "../../style.css";

const MyNav = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <img src={logo} className="img-fluid logo" alt="brand" style={{ borderRadius: '20px', marginRight: '10px' }} />
            <h5 id="navhead" style={{ color: "#fbd9ad" }}>Smart Dev</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ml-auto" defaultActiveKey="#home">
            {[
              { to: "/", icon: <AiOutlineHome />, text: "Home" },
              { to: "/projectspage", icon: <AiOutlineFundProjectionScreen />, text: "Projects" },
              { to: "/resume", icon: <CgFileDocument />, text: "Resume" },
              { to: "/certificatepage", icon: <ImBlog />, text: "Certifications" },
              { to: "/blogs", icon: <FaBlog />, text: "Blogs" }
            ].map(({ to, icon, text }) => (
              <Nav.Item key={to}>
                <Nav.Link as={Link} to={to} onClick={() => setExpand(false)}>
                  {icon} {text}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/shahzad713?tab=repositories"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
