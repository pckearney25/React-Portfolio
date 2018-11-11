import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default [
  {
    id: 0,
    date: "October 2018",
    title: "Slider Game",
    description:
      "A React Clickable Puzzle Based on Those Old Plastic Childrens Toys.",
    highlights:
      "React, JavaScript Timers, Playable as a Numbers or Picture Puzzle.",
    deployed: "https://pckearney25.github.io/Slider-Game/",
    repo: "https://github.com/pckearney25/Slider-Game",
    imgSrc: require("../../assets/images/slider.jpg"),
    icon: <FontAwesomeIcon class="fa-icon" icon={["fab", "react"]} />
  },
  {
    id: "1",
    date: "July 2018",
    title: "Bee-Z Street",
    description: "A Full-Stack MERN App for Creating Native Plant Gardens.",
    highlights:
      "React, React-Materialize, Mongo Databases, Passport Authentication.",
    deployed: "https://bee-z-street.herokuapp.com/",
    repo: "https://github.com/pckearney25/Bee-Z_Street",
    imgSrc: require("../../assets/images/bee.jpg"),
    icon: <FontAwesomeIcon class="fa-icon" icon="database" />
  },
  {
    id: "2",
    date: "March 2018",
    title: "Divas Game",
    description: "A JavaScript 'Music Diva' Themed Hangman Style Game",
    highlights:
      "Written Completely in JavaScript, Includes a Message Board and YouTube Video Rewards.",
    deployed: "https://pckearney25.github.io/Divas-Game/",
    repo: "https://github.com/pckearney25/Divas-Game",
    imgSrc: require("../../assets/images/diva.jpg"),
    icon: <FontAwesomeIcon class="fa-icon" icon={["fab", "js-square"]} />
  },
  {
    id: "3",
    date: "March 2018",
    title: "Triva Game",
    description: "A'World Cities' Themed bar-style Trivia Game.",
    highlights:
      "JavaScript, jQuery, and JS-timers Are Used to Present a Slide-show of Questions and Answers.",
    deployed: "https://pckearney25.github.io/TriviaGame/",
    repo: " https://github.com/pckearney25/TriviaGame.",
    imgSrc: require("../../assets/images/kyoto.jpg"),
    icon: <FontAwesomeIcon class="fa-icon" icon={["fab", "js-square"]} />
  }
];
