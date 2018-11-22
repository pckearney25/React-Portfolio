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
      postId: -1,
      cat: "Morris"
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleClick(y) {
    const cat = this.state.cat;
    const postId = this.state.postId;

    alert(cat + " postId: " + postId);
    alert(" Key: " + y + " has been clicked!");
    this.setState({ postId: y });
  }

  render() {
    return (
      <Wrapper>
        <SectionTitle
          src={require("../../../assets/images/coneflower.jpg")}
          sectiontitle={"Blog"}
        />
        <p class="section-paragraph">
          {`I strive to be informative, consise, and clear in all of my personal,
          social media, professional writing. Check out my most recent blog
          posts below or click on the links to see my full blog or part of an
          scientific research proposal I've submitted to the National Insitutes
          of Health.`}
        </p>
        <div className="blog-container">
          {this.state.blogs.map(blogPost => (
            <BlogPost
              id={blogPost.id}
              key={blogPost.id.toString()}
              title={blogPost.title}
              date={blogPost.date}
              teaser={blogPost.teaser}
              imgSrc={blogPost.imgSrc}
              link={blogPost.link}
              handleClick={y => this.handleClick(y)}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}
export default Blog;
