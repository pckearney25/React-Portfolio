import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./WorkTimeline.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBriefcase,
  faGraduationCap,
  faBook
} from "@fortawesome/free-solid-svg-icons";

library.add(faLeaf, faBriefcase, faGraduationCap, faBook);

class WorkTimeline extends Component {
  render() {
    return (
      <div id="timeline-div">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" July 2018 - present"
            iconStyle={{ background: "#58B041", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="briefcase" />}
          >
            <h3 className="vertical-timeline-element-title">Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Bee-Z Street</h4>
            <h4 className="vertical-timeline-element-subtitle">
              Kansas City, MO
            </h4>
            <p>
              Market Research, Business Plan Development, Web-Design,
              Web-Development
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2018 - July 2018"
            iconStyle={{ background: "#C84A59", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="graduation-cap" />}
          >
            <h3 className="vertical-timeline-element-title">
              Certificate in Full-Stack Web-Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Kansas Extention
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Overland Park, KS
            </h4>
            <p>JavaScript, Node, React, MySQL, MongoDb, Node and more.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2012 - September 2017"
            iconStyle={{ background: "#58B041", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="briefcase" />}
          >
            <h3 className="vertical-timeline-element-title">Founder and CEO</h3>
            <h4 className="vertical-timeline-element-subtitle">HD Sciences</h4>
            <h4 className="vertical-timeline-element-subtitle">
              Kansas City, KS
            </h4>
            <p>
              Microscale Chemical Synthesis Technology Development, Grant
              Writing, Business Development
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="March 2013 - April 2013"
            iconStyle={{ background: "#C84A59", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="graduation-cap" />}
          >
            <h3 className="vertical-timeline-element-title">
              Certificate in Tech Entrepreneurship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kauffman Foundation TechVenture Program
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Kansas City, MO
            </h4>
            <p>Study of Start-up Entrepreneurship</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 1999 - January 2011"
            iconStyle={{ background: "#58B041", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="briefcase" />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Director, Medicinal Chemistry
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Exeleixis LLC
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              South San Francisco, CA
            </h4>
            <p>
              Cancer and Inflammation Drug Discovery, Chemical Library
              Development, Team Leadership, Department and Project Management
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 1994"
            iconStyle={{ background: "#C84A59", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="graduation-cap" />}
          >
            <h3 className="vertical-timeline-element-title">
              PhD in Chemistry
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              California Insitute of Technology
            </h4>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA</h4>
            <p>Specialization in Physical Organic Chemistry</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 1987"
            iconStyle={{ background: "#C84A59", color: "#fff" }}
            icon={<FontAwesomeIcon class="fa-icon" icon="graduation-cap" />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science, Chemistry
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Carnegie Mellon University
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Pittsburgh, PA
            </h4>
            <p>Graduation with honors.</p>
          </VerticalTimelineElement>

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

export default WorkTimeline;
