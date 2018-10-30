import React from "react";
import "./SectionTitle.css";

const SectionTitle = props => (
  <div>
    <div className="section-img-div">
      <img src={props.src} alt="PCK pic" className="section-image" />
    </div>
    <h2 className="section-title">{props.sectiontitle}</h2>
  </div>
);

export default SectionTitle;
