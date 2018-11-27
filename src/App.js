import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import blogs from "./assets/files/blogs";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={About} key="About" />
          <Route exact path="/about" component={Home} key="Home" />
          <Route
            exact
            path="/portfolio"
            component={Portfolio}
            key="Portfolio"
          />
          <Route exact path="/blog" component={Blog} key="Blog" />
          {blogs.map(blog => (
            <Route
              exact
              path={blog.link}
              component={blog.component}
              key={blog.id.toString()}
            />
          ))}

          <Route exact path="/contact" component={Contact} key="Contact" />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
