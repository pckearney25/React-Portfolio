import blogPosts from "../../../assets/files/blogPosts";
import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./BlogTimeline.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
//Note we use faLeaf too, but its imported elsewhere.
//In future import all fa icons at App level for cleaner code?
library.add(faPen);

class BlogTimeline extends Component {
  state = {
    blogPosts
  };
  render() {
    return (
      <div id="timeline-div">
        <VerticalTimeline>
          {this.state.blogPosts.map(blogPost => (
            <VerticalTimelineElement
              id={blogPost.id}
              key={blogPost.id}
              className="vertical-timeline-element--post"
              date={blogPost.date}
              iconStyle={{ background: "#58B041", color: "#fff" }}
              icon={<FontAwesomeIcon class="fa-icon" icon="pen" />}
            >
              <div className="timeline-project-container">
                <div className="timeline-project-image-div">
                  <img
                    className="timeline-project-image"
                    src={blogPost.imgSrc}
                    alt="project-pic"
                  />
                </div>

                <div className="timeline-project-container-div" />
                <h3 className="timeline-project-title">{blogPost.title}</h3>
                <h4 className="timeline-project-description">
                  {blogPost.intro}
                </h4>
              </div>
              <p className="timeline-project-paragraph">
                {" "}
                <span>{`Introduction: `}</span>
                {blogPost.paragraph}
              </p>
              <div className="timeline-buttons-container">
                <button className="timeline-repo-btn">
                  <a target={"_blank"} href={blogPost.link}>
                    Read Full Post
                  </a>
                </button>
              </div>
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

export default BlogTimeline;
