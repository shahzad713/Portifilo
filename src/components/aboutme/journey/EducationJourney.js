import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

// Reusable button component
const JourneyButton = ({ to, text }) => (
  <Link className="btn btn-primary m-1" to={to}>
    {text}
  </Link>
);

// Data for education journey
const educationJourneyData = [
  {
    date: "2016 - 2018",
    title: "SECONDARY SCHOOL CERTIFICATE",
    subtitle: "Islamic High School",
    description: "Studied here from Class 1 to 10th as a part of secondary school Certificate and Top in 10 Class in my Examination.",
  },
  {
    date: "2018 - 2020",
    title: "Intermediate",
    subtitle: "Govt Post Graduate Collage",
    description: "Intermediate degree in Information Technology",
  },
  {
    date: "2020 - 2024",
    title: "The Bachelor of Computer Science",
    subtitle: "Virtual University of Pakistan",
    description: "In these four-year course program that focuses on various topics utilized in the creation of advanced computer systems",
  }
];

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <JourneyButton to="/educationjourney" text="Educational Journey" />
        <JourneyButton to="/experiencejourney" text="Experience Journey" />
        <JourneyButton to="/technicaljourney" text="Technical Journey" />
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {educationJourneyData.map((journey, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
            date={journey.date}
            iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">{journey.title}</h4>
            <h4 className="vertical-timeline-element-subtitle mt-2">{journey.subtitle}</h4>
            <p>{journey.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
