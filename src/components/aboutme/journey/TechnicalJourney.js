import React from "react";
import { Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import StarIcon from "@mui/icons-material/Star";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
} from "react-icons/di";
import Flip from "react-reveal/Flip";

const buttonStyle = { margin: "1rem" };
const timelineElementStyle = {
  className: "vertical-timeline-element--work",
  contentStyle: { background: "rgb(78 22 112)", color: "#fbd9ad" },
  contentArrowStyle: { borderRight: "7px solid  rgb(78 22 112)" },
  date: "",
  iconStyle: { background: "rgb(78 22 112)", color: "#fbd9ad" },
};

function Button({ to, children }) {
  return (
    <Link className="btn btn-primary m-1" style={buttonStyle} to={to}>
      {children}
    </Link>
  );
}

function generateTimelineElement(icon, title) {
  return (
    <VerticalTimelineElement
      {...timelineElementStyle}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
    </VerticalTimelineElement>
  );
}

function TechnicalJourney() {
  return (
    <>
      <div className="mt-5">
        <Button to="/educationjourney">Educational Journey</Button>
        <Button to="/experiencejourney">Experience Journey</Button>
        <Button to="/technicaljourney">Technical Journey</Button>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Technical Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {generateTimelineElement(<DiHtml5 />, "HTML")}
        {generateTimelineElement(<DiCss3 />, "CSS")}
        {generateTimelineElement(<DiJavascript1 />, "JAVASCRIPT")}
        {generateTimelineElement(<DiMysql />, "MySQL")}
        {generateTimelineElement(<DiNodejs />, "NODE JS")}
        {generateTimelineElement(<DiReact />, "REACT")}
        {generateTimelineElement(<DiPython />, "PYTHON")}
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
}

export default TechnicalJourney;
