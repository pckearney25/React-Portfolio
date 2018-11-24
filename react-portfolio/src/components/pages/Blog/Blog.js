import blogs from "../../../assets/files/blogs";
import React from "react";
import Wrapper from "../../Wrapper";
import BlogPost from "../../BlogPost";
import SectionTitle from "../../SectionTitle";
import "./Blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs,
      postId: -1
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick(y) {
    const postId = this.state.postId;
    postId === -1
      ? this.setState({ postId: y })
      : this.setState({ postId: -1 });
  }

  render() {
    const postId = this.state.postId;
    const specificPost = this.state.blogs[postId];

    if (postId === -1) {
      return (
        <Wrapper>
          <SectionTitle
            src={require("../../../assets/images/coneflower.jpg")}
            sectiontitle={"Blog"}
          />
          <p class="section-paragraph">
            {`Check out the summary list of my most recent blog posts below. To see a full post, click the “Read Full Post” button attached to each item. To follow up with me on any post, send me a message over on the “Contact” page.`}
          </p>
          <div className="blog-container">
            {this.state.blogs.map(blogPost => (
              <div className="blog-post">
                <BlogPost
                  id={blogPost.id}
                  key={blogPost.id.toString()}
                  title={blogPost.title}
                  date={blogPost.date}
                  teaser={blogPost.teaser}
                  imgSrc={blogPost.imgSrc}
                  match={this.props.match}
                  handleClick={y => this.handleClick(y)}
                />
              </div>
            ))}
          </div>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <div className="blog-container">
            <div className="blog-post">
              <BlogPost
                id={specificPost.id}
                title={specificPost.title}
                date={specificPost.date}
                teaser={specificPost.teaser}
                imgSrc={specificPost.imgSrc}
                buttonMessage="Return to List"
                match={this.props.match}
                handleClick={y => this.handleClick(y)}
              />
            </div>
          </div>
        </Wrapper>
      );
    }
  }
}
export default Blog;
