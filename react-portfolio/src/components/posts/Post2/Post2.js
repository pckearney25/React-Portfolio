import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import "../FullPost.css";

class Post2 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Wrapper>
        <SectionTitle
          src={require("../../../assets/images/sunflowers.jpg")}
          sectiontitle={"Blog Article"}
        />
        <div className="blog-container">
          <div className="blog-post">
            <div className="post-container">
              <div className="image-text-div">
                <div className="post-image-div">
                  <img
                    className="post-image"
                    src={require("../../../assets/images/post-images/slider.jpg")}
                    alt="post-pic"
                  />
                </div>
                <div className="post-text-div">
                  <h3>{`About Me In 18 Interview Questions (Part 3 of 3):`}</h3>
                  <div className="post-teaser">{`I can answer canned interview questions all day. I really want to talk about what I’m working on.`}</div>
                </div>
              </div>

              <Link to={`/blog`} role="button" className="blog-open-btn">
                <div className="btn-message">Return to Blog</div>
              </Link>
              <h6>{`Published November 26, 2018`}</h6>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Post2;
