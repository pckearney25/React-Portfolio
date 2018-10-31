import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import "./About.css";

const About = () => (
  <Wrapper>
    <SectionTitle
      src={require("../../../assets/images/author.jpg")}
      sectiontitle={"About Me"}
    />
    <p className="section-paragraph">
      Throughout my work as a both a PhD pharmaceutical research scientist and
      an entrepreneur, I’ve seen a need for making complex information more
      accessible, understandable, and useful to everyday people. As I move into
      the next phase of my career, I want to help companies, organizations, and
      individuals better utilize information to create the new products we’ll
      need over the coming decades in order to build a healthier and more
      sustainable world.
    </p>

    <p className="section-paragraph">
      I started studying full-stack web-development, because there remains
      plenty of information, both scientific and otherwise, that would be far
      more useful if incorporated into databases (e.g. SQL or Mongo) and
      accessed through well designed web interfaces. I recently completed the
      six-month program in web-development offered by University of Kansas, and
      I am currently seeking employment in the field.
    </p>

    <p className="section-paragraph">
      I’m an active life-long learner, and in addition to web-development I am
      also studying to become a certified master gardener through the University
      of Missouri Extension Program. Unsurprisingly, in trying to combine these
      two new interests I can be found in my spare time over on Bee-Z Street, a
      home gardening application that I’m developing with{" "}
      <a href="https://www.samanthamccallfp18.com/">Samantha McCall</a>, whom I
      met during the KU program.
    </p>

    <p className="section-paragraph">
      Click to download my techical resume or scientific CV here:
    </p>
    <ul className="section-list">
      <li>
        <a
          href={require("../../../assets/files/PCK_Technical_Resume.pdf")}
          target={"_blank"}
          className="hvr-grow"
        >
          Technical Resume
        </a>
      </li>
      <li>
        <a
          href={require("../../../assets/files/PCK_CV.pdf")}
          target={"_blank"}
          className="hvr-grow"
        >
          Scientific CV
        </a>
      </li>
    </ul>
  </Wrapper>
);

export default About;
