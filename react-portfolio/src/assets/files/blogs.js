import Post0 from "../../components/posts/Post0";
import Post1 from "../../components/posts/Post1";
import Post2 from "../../components/posts/Post2";

export default [
  {
    id: 0,
    date: "Published November 26, 2018",
    title: "About Me In 18 Interview Questions (Part 1 of 3):",
    teaser:
      '"If you were an animal, which one would you want to be?"...and more!',
    imgSrc: require("../../assets/images/post-images/dolphin.jpg"),
    link: "/blog/post-0",
    component: Post0
  },
  {
    id: 1,
    date: "Published November 26, 2018",
    title: "About Me In 18 Interview Questions (Part 2 of 3):",
    teaser:
      "I'm not a brand. I’m a person, and I want to sound like one during professional conversations.",
    imgSrc: require("../../assets/images/post-images/gardening.jpg"),
    link: "/blog/post-1",
    component: Post1
  },
  {
    id: 2,
    date: "Published November 26, 2018",
    title: "About Me In 18 Interview Questions (Part 3 of 3):",
    teaser:
      "What, a snail in a well? Really? Let’s talk about what I’m working on instead.",
    imgSrc: require("../../assets/images/post-images/snail.jpg"),
    link: "/blog/post-2",
    component: Post2
  }
];
