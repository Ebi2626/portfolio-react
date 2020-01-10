import React, { Component } from "react";
import ReactDOM from "react-dom";
import PortfolioBox from "./style/portfolio";
import Home from "./home";
import MobilePortfolio from "./mobile/portfolio";
import Entrance from "./style/entrance";
import EntranceText from "./style/entranceText";

import "./transition.css";
import { CSSTransition } from "react-transition-group";

import "./style.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      horizontal: 1,
      vertical: 1,
      settings: 0,
      template: 1,
      prevVertical: 1,
      prevHorizontal: 1,
      window: window.innerWidth,
      height: window.innerHeight,
      down: true,
      up: false
    };
    this.menuMove = this.menuMove.bind(this);
    this.horizontalStep = this.horizontalStep.bind(this);
    this.verticalStep = this.verticalStep.bind(this);
    this.openLink = this.openLink.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.entranceHandler = this.entranceHandler.bind(this);
  }
  entranceHandler(){
    window.addEventListener('keydown', e => {
      if((this.state.level===1) && (e.key === "F11")){
        this.setState({
          level: 2
        });
      } else if ((this.state.level===2) && (e.key === "Enter")) {
        this.setState({
          level: 3
        })
      }
    });
  }


  resizeHandler() {
    this.setState({
      window: window.innerWidth,
      height: window.innerHeight
    });
  }

  openLink() {
    let link = document.querySelector("a");
    if(this.state.level > 2){
      if(link){
        window.open(link.href, "_blank");
      }
    }
    
  }
  horizontalStep(a) {
    if (a === "ArrowDown") {
      this.setState(prevState => {
        let newValue = prevState.vertical + 1;
        let currentValue = prevState.vertical;
        let down;
        switch (this.state.horizontal) {
          case 1:
            if (newValue > 2) {
              newValue = 2;
            }
            console.log("Obecny vertical: "+newValue);
            newValue === 2 ? (down = false) : (down = true);
            break;
          case 2:
            if (newValue > 5) {
              newValue = 5;
            }
            newValue === 5 ? (down = false) : (down = true);
            break;
          case 3:
            if (newValue > 15) {
              newValue = 15;
            }
            newValue === 15 ? (down = false) : (down = true);
            break;
          case 4:
            if (newValue > 3) {
              newValue = 3;
            }
            newValue === 3 ? (down = false) : (down = true);
            break;
          default:
            console.log(
              "There is some error in vertical movement f. vertiaclStep"
            );
            break;
        }
        return {
          prevVertical: currentValue,
          vertical: newValue,
          up: true,
          down: down
        };
      });
    } else if (a === "ArrowUp") {
      this.setState(prevState => {
        let newValue = prevState.vertical - 1;
        let currentValue = prevState.vertical;
        let up;
        if (newValue < 2) {
          newValue = 1;
        }
        newValue !== 1 ? (up = true) : (up = false);
        return {
          prevVertical: currentValue,
          vertical: newValue,
          up: up,
          down: true
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
        let currentValue = prevState.horizontal;
        if (newValue > 4) {
          newValue = 1;
        }
        return {
          horizontal: newValue,
          prevHorizontal: currentValue,
          vertical: 1,
          down: true,
          up: false
        };
      });
    } else if (a === "ArrowLeft") {
      this.setState(prevState => {
        let newValue = prevState.horizontal - 1;
        let currentValue = prevState.horizontal;
        if (newValue < 1) {
          newValue = 4;
        }
        return {
          horizontal: newValue,
          prevHorizontal: currentValue,
          vertical: 1,
          down: true,
          up: false
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
          if(document.querySelector(".Up") !== null){
            document.querySelector(".Up").style.opacity = 1;
            setTimeout(()=>{
              document.querySelector(".Up") !== null ? document.querySelector(".Up").style.opacity = .3 : console.log("Tu pojawiłby się błąd z powodu szybkosci klikania");
            },300);
          }
          break;
        case "ArrowDown":
          this.horizontalStep(e.key);
          if(document.querySelector(".Down") !== null){
            document.querySelector(".Down").style.opacity = 1;
            setTimeout(()=>{
              document.querySelector(".Down") !== null ? document.querySelector(".Down").style.opacity = .3 : console.log("Tu pojawiłby się błąd z powodu szybkosci klikania");
            },300);
          }
          break;
        case "ArrowLeft":
          this.verticalStep(e.key);
          if(document.querySelector(".Left") !== null){
            document.querySelector(".Left").style.opacity = 1;
            setTimeout(()=>{
              document.querySelector(".Left") !== null ? document.querySelector(".Left").style.opacity = .3 : console.log("Tu pojawiłby się błąd z powodu szybkosci klikania");
            },300);
          }
          break;
        case "ArrowRight":
          this.verticalStep(e.key);
          if(document.querySelector(".Right") !== null){
            document.querySelector(".Right").style.opacity = 1;
            setTimeout(()=>{
              document.querySelector(".Right") !== null ? document.querySelector(".Right").style.opacity = .3 : console.log("Tu pojawiłby się błąd z powodu szybkosci klikania");
            },300);
          }
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
    window.addEventListener("resize", this.resizeHandler);
    if (this.state.level !== 3){
      this.entranceHandler();
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }
  render() {
    if (this.state.window > 600 && this.state.height > 600) {
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
      body.style.cursor = "none";
      body.style.userSelect = "none";
      if(this.state.level !== 3){
        const entranceText1 = 'Welcome in my personal programming portfolio. Press "F11" to continue';
        const entranceText2 = "Use arrows to move through my portfolio. Use \"enter\" to open link. Press \"enter\" to enter into portfolio. Enjoy!";
        return (<Entrance>
                  <CSSTransition
                    in={true}
                    appear={true}
                    classNames="fade"
                    timeout={1000}
                    >
                      <EntranceText level={this.state.level}>{this.state.level === 1? entranceText1 : entranceText2}</EntranceText>
                    </CSSTransition>
                  </Entrance>);
      } else {
        return (<PortfolioBox width={this.state.window} height={this.state.height}>
          <CSSTransition
            appear={true}
            in={true}
            classNames="fade"
            timeout={3000}
          >
            <Home
              horizontal={this.state.horizontal}
              vertical={this.state.vertical}
              prevVertical={this.state.prevVertical}
              prevHorizontal={this.state.prevHorizontal}
              up={this.state.up}
              down={this.state.down}
            />
            </CSSTransition>
    </PortfolioBox>);
      }
    } else {
      return (
        <MobilePortfolio width={this.state.window} height={this.state.height} />
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Portfolio />, rootElement);
