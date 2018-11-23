import React from "react";
import "./BlogPost.css";

class BlogPost extends React.Component {
  render() {
    let blogKey = this.props.id;
    console.log(blogKey);
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
        <button
          className="blog-open-btn"
          onClick={() => this.props.handleClick(blogKey)}
        >
          Read Full Post
        </button>
        <h6>{`${this.props.date}`}</h6>
      </div>
    );
  }
}

export default BlogPost;
