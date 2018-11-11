import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import PortfolioTimeline from "../../PortfolioTimeline";
import "./Portfolio.css";

class Portfolio extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <SectionTitle
          src={require("../../../assets/images/butterflyweed.jpg")}
          sectiontitle={"Portfolio"}
        />
        <p className="section-paragraph">
          <span>About the Portfolio: </span> Presented are a few of the projects
          that I've enjoyed working on. These span a range from a simple
          JavaScript game to a full-stack MERN application incorporating user
          authentication. Consistent throughout my work is an emphasis on
          providing a clean user interface and an enjoyable user experience.
        </p>

        <p className="section-paragraph">
          <span>{`Selected Projects: `}</span>
        </p>
        <PortfolioTimeline />
      </Wrapper>
    );
  }
}

export default Portfolio;
