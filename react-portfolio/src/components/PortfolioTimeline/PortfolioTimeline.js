import projects from "../../assets/files/projects.json";
import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./PortfolioTimeline.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
//Note we use faLeaf too, but its imported elsewhere.
//In future import all fa icons at App level for cleaner code?
library.add(faSun);

class PortfolioTimeline extends Component {
  state = {
    projects
  };
  render() {
    return (
      <div id="timeline-div">
        <VerticalTimeline>
          {this.state.projects.map(project => (
            <VerticalTimelineElement
              id={project.id}
              key={project.id}
              className="vertical-timeline-element--project"
              date={project.date}
              iconStyle={{ background: "#58B041", color: "#fff" }}
              icon={<FontAwesomeIcon class="fa-icon" icon="sun" />}
            >
              <img
                src={project.imgSrc}
                alt="Smiley face"
                width="200px"
                height="200px"
              />
              <h3 className="vertical-timeline-element-title">
                {project.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {project.description}
              </h4>

              <p>{project.highlights}</p>
              <a href={project.repo}>Project Repo</a>
              <a href={project.deployed}>Deployed App</a>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            className="vertical-timeline-element--gardening"
            iconStyle={{ background: "#44220C", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="leaf" />}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default PortfolioTimeline;
