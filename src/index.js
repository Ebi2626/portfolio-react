import React, { Component } from "react";
import ReactDOM from "react-dom";
import PortfolioBox from "./style/portfolio.js";
import Home from "./home";

import "./style.css";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      horizontal: 1,
      vertical: 1,
      settings: 0,
      template: 1
    };
  }
  render() {
    return (
      <PortfolioBox>
        <Home
          horizontal={this.state.horizontal}
          vertical={this.state.vertical}
        />
      </PortfolioBox>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Portfolio />, rootElement);
