import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Home.css";

class Home extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="boxer"
          transitionAppear={true}
          transitionAppearTimeout={600000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div id="quote-container">
            <ReactCSSTransitionGroup
              transitionName="quote1"
              transitionAppear={true}
              transitionAppearTimeout={1700}
              transitionEnter={false}
              transitionLeave={false}
            >
              <h2> {`"Absorb the opportunities around you."`}</h2>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionName="quote2"
              transitionAppear={true}
              transitionAppearTimeout={3200}
              transitionEnter={false}
              transitionLeave={false}
            >
              <h2> {`"Bloom where you're planted."`}</h2>
            </ReactCSSTransitionGroup>

            <ReactCSSTransitionGroup
              transitionName="quote3"
              transitionAppear={true}
              transitionAppearTimeout={4700}
              transitionEnter={false}
              transitionLeave={false}
            >
              <h2>{`"And create the seeds for a better world."`}</h2>
            </ReactCSSTransitionGroup>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Home;
