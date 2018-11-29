import React from "react";
//import { Route } from "react-router-dom";
import Wrapper from "../../Wrapper";
import BlogPost from "../../BlogPost";
import SectionTitle from "../../SectionTitle";
import "../../../assets/css/Blog.css";

class Blog extends React.Component {
  render() {
    const blogs = this.props.state.blogs;
    const blogStyles = this.props.state.blogStyles;
    const blogHandleClick = this.props.blogHandleClick;
    //const fullPostProps = {
    //cat: "My cat is pretty!",
    //blogHandleClick: () => this.blogHandleClick()
    // };
    console.log(blogStyles);
    window.scrollTo(0, 0);
    return (
      <div>
        <div style={blogStyles}>
          <Wrapper>
            <SectionTitle
              src={require("../../../assets/images/coneflower.jpg")}
              sectiontitle={"Blog"}
            />
            <p className="section-paragraph">
              <span>{`About the Blog: `}</span>
              {`Read on to learn more about my journey into web-development and my studies of entrepreneurship, scientice, and environmental sustainability. To follow up with me on any post, message me over on the “Contact” page.`}
            </p>
            <p className="section-paragraph">
              <span>{`Recent Posts: `}</span>
            </p>
            <div className="blog-container">
              {blogs.map(blogPost => (
                <div className="blog-post" key={blogPost.id.toString()}>
                  <BlogPost
                    id={blogPost.id}
                    key={blogPost.id.toString()}
                    title={blogPost.title}
                    date={blogPost.date}
                    teaser={blogPost.teaser}
                    imgSrc={blogPost.imgSrc}
                    link={blogPost.link}
                    blogStyles={blogStyles}
                    blogHandleClick={() => {
                      blogHandleClick();
                    }}
                  />
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
      </div>
    );
  }
}
export default Blog;
