import React, { Component } from "react";
import Item from "./style/navItem";
import Wrapper from "./style/wrapper";
import AboutMe from "./aboutMe";
import MyProjects from "./myProjects";
import MySkills from "./mySkills";
import Contact from "./contact";
import Counter from "./counter";
import "./transition.css";
import { CSSTransition } from "react-transition-group";

class NavItem extends Component {
  render() {
    let Content;
    if (this.props.current) {
      switch (this.props.id) {
        case 1:
          Content = (
            <AboutMe
              vertical={this.props.vertical}
              prevVertical={this.props.prevVertical}
            />
          );
          break;
        case 2:
          Content = (
            <MyProjects
              vertical={this.props.vertical}
              prevVertical={this.props.prevVertical}
            />
          );
          break;
        case 3:
          Content = (
            <MySkills
              vertical={this.props.vertical}
              prevVertical={this.props.prevVertical}
            />
          );
          break;
        case 4:
          Content = (
            <Contact
              vertical={this.props.vertical}
              prevVertical={this.props.prevVertical}
            />
          );
          break;
        default:
          break;
      }
      return (
        <>
          <Item style={this.props.style}>
            {this.props.element}{" "}
            <Counter
              value={this.props.vertical}
              maxValue={this.props.maxValue}
              horizontal={this.props.horizontal}
            />
          </Item>
          <Wrapper>
            <CSSTransition
              appear={true}
              in={true}
              classNames="fade"
              timeout={1000}
            >
              {Content}
            </CSSTransition>
          </Wrapper>
        </>
      );
    } else {
      return (
        <Item style={this.props.style}>
          {this.props.element}{" "}
          <Counter
            value={this.props.vertical}
            maxValue={this.props.maxValue}
            horizontal={this.props.horizontal}
          />
        </Item>
      );
    }
  }
}
export default NavItem;
