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

/*
Welcome in my portfolio. It is prepared in non optimal way, because
its main target is to show you my knowledge in widely way.

Index.js - chceck width of device and display right version of app

Structure of desktop version is:
- Portfolio > Home(with blue circle)
- Home > Nav(It display nav elements around the circle - but invisible in order to manage problems with variety screens)
- NavItem > ContentComponent (AboutMe, MyProjects, MySkills, Contact) - it depends on state: horizontal
- ContentComponent > ContentComponentElement[i] - i depends on state vertical
- Content element > it mapping array (skillList, projectsList, contactList) to components
- Styles were prepared in "styled-components" library, but I also made some css inside my JSX and in objects to show you that I understand all ways to implement css to my app
- Transitions are driven by React-transition-group library
- Components are mainly class based

Logic:
- Cursor is disable on the screen
- Arrows and enter takes control over displaying data
- It force user to enble fullscreen to display second view
- Second view inform user about contol, enter open third view the main part of application
- "enter" button used on the screen with any href open this href in new tab

-----MOBILE-----
- Written in functional components using hooks (useState and in one case useEffect just for example)
- Portfolio > Content Components
- Content components mapping arrays from the lists for desktop version to items
- Items depends on state horizontal and vertical as in desktop version
- Cursor is normal
- Moving over app is controlled by arrows on the screen
- I decided to not adding transitions on mobile version to not overhelming weaker devices

*/

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1, // It inform desktop version about entrance
      horizontal: 1, // It inform app about horiznotal position of app
      vertical: 1, // It informa about vertical (depth) position of app
      prevVertical: 1, //It is usied to change kind of transition
      prevHorizontal: 1, // Like above
      window: window.innerWidth, // Used to rerender app during resize
      height: window.innerHeight, // Like above
      down: true, // Enabling/disabling arrow down
      up: false // Like above but up
    };
    //Binding all methods
    this.menuMove = this.menuMove.bind(this);
    this.horizontalStep = this.horizontalStep.bind(this);
    this.verticalStep = this.verticalStep.bind(this);
    this.openLink = this.openLink.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.entranceHandler = this.entranceHandler.bind(this);
  }
  // Method to force user to enable fullscreen and read instruction
  entranceHandler() {
    window.addEventListener("keydown", e => {
      if (
        this.state.level === 1 &&
        navigator.userAgent.match(/Mozilla/) &&
        e.key === "Enter"
      ) {
        this.setState({
          level: 2
        });
      } else if (this.state.level === 1 && e.key === "F11") {
        this.setState({
          level: 2
        });
      } else if (this.state.level === 2 && e.key === "Enter") {
        this.setState({
          level: 3
        });
      }
    });
  }
  // Method to force application to rerender when window is resize
  resizeHandler() {
    this.setState({
      window: window.innerWidth,
      height: window.innerHeight
    });
  }
  // Method to open link on the page in new window
  openLink() {
    let link = document.querySelector("a");
    if (this.state.level > 2) {
      if (link) {
        window.open(link.href, "_blank");
      }
    }
  }
  // Method to manage moving horizontal
  // It change max-min value of vertical movement depends on horizontal
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
            newValue === 2 ? (down = false) : (down = true);
            break;
          case 2:
            if (newValue > 5) {
              newValue = 5;
            }
            newValue === 5 ? (down = false) : (down = true);
            break;
          case 3:
            if (newValue > 16) {
              newValue = 16;
            }
            newValue === 16 ? (down = false) : (down = true);
            break;
          case 4:
            if (newValue > 4) {
              newValue = 4;
            }
            newValue === 4 ? (down = false) : (down = true);
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
  // Manage to moving left and right over app
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
  // Method to implement all logic of movement throuhg app
  // It has also some line to make arrows animated in vanilia js
  menuMove() {
    // Better code for the same functionality, but without using switch
    // You can find in mobile version
    window.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowUp":
          this.horizontalStep(e.key);
          if (document.querySelector(".Up") !== null) {
            document.querySelector(".Up").style.opacity = 1;
            setTimeout(() => {
              document.querySelector(".Up") !== null
                ? (document.querySelector(".Up").style.opacity = 0.3)
                : console.log("Error from too quick changing state");
            }, 300);
          }
          break;
        case "ArrowDown":
          this.horizontalStep(e.key);
          if (document.querySelector(".Down") !== null) {
            document.querySelector(".Down").style.opacity = 1;
            setTimeout(() => {
              document.querySelector(".Down") !== null
                ? (document.querySelector(".Down").style.opacity = 0.3)
                : console.log("Error from too quick changing state");
            }, 300);
          }
          break;
        case "ArrowLeft":
          this.verticalStep(e.key);
          if (document.querySelector(".Left") !== null) {
            document.querySelector(".Left").style.opacity = 1;
            setTimeout(() => {
              document.querySelector(".Left") !== null
                ? (document.querySelector(".Left").style.opacity = 0.3)
                : console.log("Error from too quick changing state");
            }, 300);
          }
          break;
        case "ArrowRight":
          this.verticalStep(e.key);
          if (document.querySelector(".Right") !== null) {
            document.querySelector(".Right").style.opacity = 1;
            setTimeout(() => {
              document.querySelector(".Right") !== null
                ? (document.querySelector(".Right").style.opacity = 0.3)
                : console.log("Error from too quick changing state");
            }, 300);
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
  // Using react lifcycle method to implement logic to the DOM
  componentDidMount() {
    this.menuMove();
    window.addEventListener("resize", this.resizeHandler);
    if (this.state.level !== 3) {
      this.entranceHandler();
    }
  }
  //Example of cleaning using another lifecycle method
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }
  render() {
    let body = document.querySelector("body");
    //Deciding if app should display desktop or mobile version
    if (this.state.window > 600 && this.state.height > 600) {
      // Disabling cursor
      body.style.overflow = "hidden";
      body.style.cursor = "none";
      body.style.userSelect = "none";
      if (this.state.level !== 3) {
        let entranceText1, entranceText2;
        if (navigator.appName === "Netscape") {
          entranceText1 =
            'Welcome in my personal programming portfolio. Press "F11" and "enter" to continue';
          entranceText2 =
            'Use arrows to move through my portfolio. Use "enter" to open link. Press "enter" to enter into portfolio. Enjoy!';
        } else {
          entranceText1 =
            'Welcome in my personal programming portfolio. Press "F11" to continue';
          entranceText2 =
            'Use arrows to move through my portfolio. Use "enter" to open link. Press "enter" to enter into portfolio. Enjoy!';
        }
        return (
          <Entrance>
            <CSSTransition
              in={true}
              appear={true}
              classNames="fade"
              timeout={1000}
            >
              <EntranceText level={this.state.level}>
                {this.state.level === 1 ? entranceText1 : entranceText2}
              </EntranceText>
            </CSSTransition>
          </Entrance>
        );
      } else if (
        this.state.window > 600 &&
        this.state.height > 600 &&
        this.state.level === 3
      ) {
        body.style.overflow = "hidden";
        body.style.cursor = "normal";
        body.style.userSelect = "none";
        return (
          <PortfolioBox width={this.state.window} height={this.state.height}>
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
          </PortfolioBox>
        );
      }
    } else {
      // Enabling cursor in case when user resize window to mobile width
      body.style.overflow = "hidden";
      body.style.cursor = "normal";
      body.style.userSelect = "none";
      return (
        <CSSTransition appear={true} in={true} classNames="fade" timeout={3000}>
          <MobilePortfolio
            width={this.state.window}
            height={this.state.height}
          />
        </CSSTransition>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Portfolio />, rootElement);
