import React, { Component } from "react";
import NavBox from "./style/nav";
import NavItem from "./navItem";

class Nav extends Component {
  render() {
    let currentOption = this.props.horizontal;
    let style1, style2, style3, style4;
    let styleTop = {
      top: "-60px",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
      color: "white"
    };
    let styleRight = {
      top: "40%",
      transform: "translateY(-50%)",
      right: "-110px"
    };
    let styleBottom = {
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center"
    };
    let styleLeft = {
      top: "calc(50% - 2em)",
      transform: "translateY(-50%)",
      left: "-110px"
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
        style2 = styleBottom;
        style1 = styleLeft;
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
        <NavItem
          id={1}
          style={style1}
          current={currentOption === 1 ? true : false}
          element="About me"
        />
        <NavItem
          id={2}
          style={style2}
          current={currentOption === 2 ? true : false}
          element="My projects"
          vertical={this.props.vertical}
        />
        <NavItem
          id={3}
          style={style3}
          current={currentOption === 3 ? true : false}
          element="My skills"
        />
        <NavItem
          id={4}
          style={style4}
          current={currentOption === 4 ? true : false}
          element="Contact"
        />
      </NavBox>
    );
  }
}

export default Nav;
