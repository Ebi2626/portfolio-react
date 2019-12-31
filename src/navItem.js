import React, { Component } from "react";
import Item from "./style/navItem";
import Wrapper from "./style/wrapper";
import AboutMe from "./aboutMe";
import MyProjects from "./myProjects";
import MySkills from "./mySkills";
import Contact from "./contact";

class NavItem extends Component {
  render() {
    let Content;
    if (this.props.current) {
      switch (this.props.id) {
        case 1:
          Content = <AboutMe />;
          break;
        case 2:
          Content = <MyProjects vertical={this.props.vertical} />;
          break;
        case 3:
          Content = <MySkills />;
          break;
        case 4:
          Content = <Contact />;
          break;
        default:
          break;
      }
      return (
        <>
          <Item style={this.props.style}>{this.props.element}</Item>
          <Wrapper>{Content}</Wrapper>
        </>
      );
    } else {
      return <Item style={this.props.style}>{this.props.element}</Item>;
    }
  }
}
export default NavItem;
