import React, { Component } from "react";
import ReactDOM from "react-dom";
import PortfolioBox from "./style/portfolio.js";
import Home from "./home";
import "./transition.css";
import { CSSTransition } from "react-transition-group";

import "./style.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontal: 1,
      vertical: 1,
      settings: 0,
      template: 1,
      prevVertical: 1
    };
    this.menuMove = this.menuMove.bind(this);
    this.horizontalStep = this.horizontalStep.bind(this);
    this.verticalStep = this.verticalStep.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  openLink() {
    let link = document.querySelector("a");
    window.open(link.href, "_blank");
  }
  horizontalStep(a) {
    if (a === "ArrowDown") {
      this.setState(prevState => {
        let newValue = prevState.vertical + 1;
        let currentValue = prevState.vertical;
        switch (this.state.horizontal) {
          case 1:
            if (newValue > 2) {
              newValue = 2;
            }
            break;
          case 2:
            if (newValue > 5) {
              newValue = 5;
            }
            break;
          case 3:
            if (newValue > 14) {
              newValue = 14;
            }
            break;
          case 4:
            if (newValue > 3) {
              newValue = 3;
            }
            break;
          default:
            console.lgo(
              "There is some error in vertical movement f. vertiaclStep"
            );
            break;
        }
        return {
          prevVertical: currentValue,
          vertical: newValue
        };
      });
    } else if (a === "ArrowUp") {
      this.setState(prevState => {
        let newValue = prevState.vertical - 1;
        let currentValue = prevState.vertical;
        if (newValue < 2) {
          newValue = 1;
        }
        return {
          prevVertical: currentValue,
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
        if (newValue > 4) {
          newValue = 1;
        }
        return {
          horizontal: newValue,
          vertical: 1
        };
      });
    } else if (a === "ArrowLeft") {
      this.setState(prevState => {
        let newValue = prevState.horizontal - 1;
        if (newValue < 1) {
          newValue = 4;
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
        case "Enter":
          this.openLink();
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
        <CSSTransition appear={true} in={true} classNames="fade" timeout={3000}>
          <Home
            horizontal={this.state.horizontal}
            vertical={this.state.vertical}
            prevVertical={this.state.prevVertical}
          />
        </CSSTransition>
      </PortfolioBox>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Portfolio />, rootElement);
