import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

// Reusable button component
const JourneyButton = ({ to, text }) => (
  <Link className="btn btn-primary m-1" to={to}>
    {text}
  </Link>
);

// Data for experience journey
const experienceJourneyData = [
  {
    date: "2022",
    title: "Software Engineer",
    subtitle: "Front end React Js Developer",
    description: [
      "Developed software solutions, optimizing efficiency through in-depth analysis.",
      "Investigated and reduced software bugs throughout the development lifecycle.",
      "Improved and maintained existing software, resulting in a 15% increase in performance.",
      "Evaluated operational feasibility, contributing to a 40% improvement in solution development.",
      "Successfully delivered solutions, enhancing user experience and achieving a 50% increase in satisfaction"],
  },
  {
    date: "2022 - Current",
    title: "Up Work (Freelancer)",
    subtitle: "React Js Developer",
    description: [
      "Worked with clients from various fields to create cool, responsive websites.",
      "Built and looked after websites using the latest web tech and best practices.",
      "Turned design ideas into perfect web pages that work on all browsers.",
      "Made websites load faster for better user experiences.",
      "Proficient in developing and maintaining various reporting dashboard, technical support to end-users, diagnosing hardware and software issues, and collaborating with IT teams to promptly resolve system-related problems.",
    ],
  }
];

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <JourneyButton to="/educationjourney" text="Educational Journey" />
        <JourneyButton to="/experiencejourney" text="Experience Journey" />
        <JourneyButton to="/technicaljourney" text="Technical Journey" />
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {experienceJourneyData.map((journey, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
            date={journey.date}
            iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            icon={<PersonIcon />}
          >
            <h5 className="vertical-timeline-element-title">{journey.title}</h5>
            <h6 className="vertical-timeline-element-subtitle mt-2">{journey.subtitle}</h6>
            {journey.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
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

export default ExperienceJourney;
