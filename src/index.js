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
    this.menuMove = this.menuMove.bind(this);
    this.horizontalStep = this.horizontalStep.bind(this);
    this.verticalStep = this.verticalStep.bind(this);
  }
  horizontalStep(a) {
    if (a === "ArrowDown") {
      this.setState(prevState => {
        let newValue = prevState.vertical + 1;
        if (newValue > 4) {
          newValue = 5;
        }
        return {
          vertical: newValue
        };
      });
    } else if (a === "ArrowUp") {
      this.setState(prevState => {
        let newValue = prevState.vertical - 1;
        if (newValue < 2) {
          newValue = 1;
        }
        return {
          vertical: newValue
        };
      });
    } else {
      console.log("Error, pressed unexpected key:" + a);
    }
  }
  verticalStep(a) {
    if (a === "ArrowRight") {
      this.setState(prevState => {
        let newValue = prevState.horizontal + 1;
        if (newValue > 3) {
          newValue = 4;
        }
        return {
          horizontal: newValue,
          vertical: 1
        };
      });
    } else if (a === "ArrowLeft") {
      this.setState(prevState => {
        let newValue = prevState.horizontal - 1;
        if (newValue < 2) {
          newValue = 1;
        }
        return {
          horizontal: newValue,
          vertical: 1
        };
      });
    } else {
      console.log("Error, pressed unexpected key:" + a);
    }
  }
  menuMove() {
    window.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowUp":
          this.horizontalStep(e.key);
          break;
        case "ArrowDown":
          this.horizontalStep(e.key);
          break;
        case "ArrowLeft":
          this.verticalStep(e.key);
          break;
        case "ArrowRight":
          this.verticalStep(e.key);
          break;
        default:
          break;
      }
    });
  }
  componentDidMount() {
    this.menuMove();
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
