import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "..//pages/Learn";
import "./BlogPost.css";

class BlogPost extends React.Component {
  render() {
    const blogKey = this.props.id;
    const matchURL = this.props.match.url;
    alert(matchURL);
    return (
      <div className="post-container">
        <div className="image-text-div">
          <div className="post-image-div">
            <img
              className="post-image"
              src={this.props.imgSrc}
              alt="post-pic"
            />
          </div>
          <div className="post-text-div">
            <h3>{`${this.props.title}`}</h3>
            <div className="post-teaser">{`${this.props.teaser}`}</div>
          </div>
        </div>
        <Link
          to={matchURL}
          role="button"
          className="blog-open-btn"
          onClick={() => this.props.handleClick(blogKey)}
        >
          <div className="btn-message">Read Full Post</div>
        </Link>
        <Route exact path={matchURL} component={Learn} />
        <h6>{`${this.props.date}`}</h6>
      </div>
    );
  }
}

export default BlogPost;
