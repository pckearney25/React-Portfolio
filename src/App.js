import blogs from "./assets/files/blogs";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs,
      blogStyles: { display: "block" }
    };
  }

  blogHandleClick() {
    let blogStyles = this.state.blogStyles;
    console.log(blogStyles);
    if (blogStyles.display === "block") {
      this.setState({ blogStyles: { display: "none" } });
    } else {
      this.setState({ blogStyles: { display: "block" } });
    }
  }
  render() {
    const props = {
      state: this.state,
      blogHandleClick: () => this.blogHandleClick()
    };

    const fullPostProps = {
      cat: "My cat is pretty!",
      blogHandleClick: () => this.blogHandleClick()
    };
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            path="/blog"
            render={routeProps => <Blog {...routeProps} {...props} />}
          />
          {blogs.map(blogPost => (
            //<Route
            // exact
            //path={blogPost.link}
            //component={blogPost.component}
            // key={blogPost.id.toString()}
            ///>
            <Route
              exact
              path={blogPost.link}
              render={routeProps => (
                <blogPost.component {...routeProps} {...fullPostProps} />
              )}
              key={blogPost.id.toString()}
            />
          ))}
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
