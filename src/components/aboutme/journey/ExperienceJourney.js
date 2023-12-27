import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022 - Current"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Up Work (Freelancer)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            React Js Developer
          </h6>
          <p>
            • Worked with clients from various fields to create cool, responsive
            websites.
          </p>
          <p>
            • Built and looked after websites using the latest web tech and best
            practices.
          </p>
          <p>
            • Turned design ideas into perfect web pages that work on all
            browsers.
          </p>
          <p>
            • SMade websites load faster for better user experiences. Added cool
            features and data magic by connecting to other web tools.
          </p>
          <p>
            • Proficient in developing and maintaining various reporting
            dashboard, technical support to end-users, diagnosing hardware and
            software issues, and collaborating with IT teams to promptly resolve
            system-related problems.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
