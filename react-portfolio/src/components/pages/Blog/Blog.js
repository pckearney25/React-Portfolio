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
      blogs
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <SectionTitle
          src={require("../../../assets/images/coneflower.jpg")}
          sectiontitle={"Blog"}
        />
        <p className="section-paragraph">
          <span>{`About the Blog: `}</span>
          {`Read on to learn more about my journey into web-development and other topics such as entrepreneurship, scientific breakthroughs, and environmental sustainability. To follow up with me on any post, send me a message over on the “Contact” page.`}
        </p>
        <p className="section-paragraph">
          <span>{`Recent Posts: `}</span>
        </p>
        <div className="blog-container">
          {this.state.blogs.map(blogPost => (
            <div className="blog-post" key={blogPost.id.toString()}>
              <BlogPost
                id={blogPost.id}
                key={blogPost.id.toString()}
                title={blogPost.title}
                date={blogPost.date}
                teaser={blogPost.teaser}
                imgSrc={blogPost.imgSrc}
                link={blogPost.link}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }
}
export default Blog;

//handleClick={y => this.handleClick(y)}
