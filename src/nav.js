import React, { Component } from "react";
import NavBox from "./style/nav";
import NavItem from "./navItem";
import "./style.css";
import "./transition.css";
import { CSSTransition } from "react-transition-group";

class Nav extends Component {
  render() {
    let currentOption = this.props.horizontal;
    let style1, style2, style3, style4;
    let styleTop = {
      top: "-75px",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
      width: 200,
      color: "white",
      fontSize: 24,
      transition: "all .5s linear"
    };
    let styleRight = {
      top: "40%",
      transform: "translateY(-50%)",
      left: "calc(100% + 110px)",
      color: "black",
      fontSize: 24,
      opacity: 0,
      transition: "all .5s linear"
    };
    let styleBottom = {
      bottom: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
      color: "black",
      fontSize: 24,
      opacity: 0,
      transition: "all .5s linear"
    };
    let styleLeft = {
      top: "calc(50% - 2em)",
      transform: "translateY(-50%)",
      left: "-110px",
      color: "black",
      fontSize: 24,
      opacity: 0,
      transition: "all .5s linear"
    };
    switch (currentOption) {
      case 1:
        style1 = styleTop;
        style2 = styleRight;
        style3 = styleBottom;
        style4 = styleLeft;
        break;
      case 2:
        style2 = styleTop;
        style3 = styleRight;
        style4 = styleBottom;
        style1 = styleLeft;
        break;
      case 3:
        style3 = styleTop;
        style4 = styleRight;
        style1 = styleBottom;
        style2 = styleLeft;
        break;
      case 4:
        style4 = styleTop;
        style1 = styleRight;
        style2 = styleBottom;
        style3 = styleLeft;
        break;
      default:
        style1 = styleTop;
        style2 = styleRight;
        style3 = styleBottom;
        style4 = styleLeft;
        break;
    }
    return (
      <NavBox>
        <CSSTransition appear={true} in={true} classNames="fade" timeout={3000}>
          <NavItem
            id={1}
            className="nav__item"
            style={style1}
            current={currentOption === 1 ? true : false}
            element="About me"
            vertical={this.props.vertical}
            prevVertical={this.props.prevVertical}
          />
        </CSSTransition>
        <CSSTransition appear={true} in={true} classNames="fade" timeout={3000}>
          <NavItem
            id={2}
            className="nav__item"
            style={style2}
            current={currentOption === 2 ? true : false}
            element="My projects"
            vertical={this.props.vertical}
            prevVertical={this.props.prevVertical}
          />
        </CSSTransition>
        <CSSTransition appear={true} in={true} classNames="fade" timeout={3000}>
          <NavItem
            id={3}
            className="nav__item"
            style={style3}
            current={currentOption === 3 ? true : false}
            element="My skills"
            vertical={this.props.vertical}
            prevVertical={this.props.prevVertical}
          />
        </CSSTransition>
        <CSSTransition appear={true} in={true} classNames="fade" timeout={3000}>
          <NavItem
            id={4}
            className="nav__item"
            style={style4}
            current={currentOption === 4 ? true : false}
            element="Contact"
            vertical={this.props.vertical}
            prevVertical={this.props.prevVertical}
          />
        </CSSTransition>
      </NavBox>
    );
  }
}

export default Nav;
