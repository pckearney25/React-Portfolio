import React from "react";
import Wrapper from "../../Wrapper";
import SectionTitle from "../../SectionTitle";
import "./Home.css";

const Home = () => (
  <div>
    <div id="quote-container">
      <div>"Absorb the opportunities around you."</div>
      <div>"Bloom where you're planted."</div>
      <div>"And create the seeds for a better world."</div>
    </div>
    <Wrapper>
      <SectionTitle
        src={require("../../../assets/images/coneflower.jpg")}
        sectiontitle={"Home"}
      />

      <p class="section-paragraph">Welcome to my page.</p>
    </Wrapper>
  </div>
);

export default Home;
