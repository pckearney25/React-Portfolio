import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
//import Post0 from "./components/posts/Post0";
//import Post1 from "./components/posts/Post1";
//import Post2 from "./components/posts/Post2";
import blogs from "./assets/files/blogs";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          {blogs.map(blog => (
            <Route exact path={blog.link} component={blog.component} />
          ))}

          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
