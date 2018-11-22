import React from "react";
import "./BlogPost.css";

class BlogPost extends React.Component {
  render() {
    const blogKey = this.props.id;
    return (
      <div className="post-container">
        <h3>{`${this.props.title}`}</h3>
        <h6>{`${this.props.date}`}</h6>
        <div className="section-paragraph">{`${this.props.teaser}`}</div>
        <img className="post-image" src={this.props.imgSrc} alt="post-pic" />
        <button
          className="blog-open-btn"
          onClick={() => this.props.handleClick(blogKey)}
        >
          Read Full Post
        </button>
      </div>
    );
  }
}

export default BlogPost;
