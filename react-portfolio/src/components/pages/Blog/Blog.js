import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import "./Blog.css";

const Blog = () => (
  <Wrapper>
    <SectionTitle
      src={require("../../../assets/images/coneflower.jpg")}
      sectiontitle={"Blog"}
    />

    <p class="section-paragraph">
      I strive to be informative, consise, and clear in all of my personal,
      social media, professional writing. Check out my most recent blog posts
      below or click on the links to see my full blog or part of an scientific
      research proposal I've submitted to the National Insitutes of Health.{" "}
    </p>
  </Wrapper>
);

export default Blog;
