import React, { Component } from "react";
import "./transition.css";
import { CSSTransition } from "react-transition-group";
import HomeBox from "./style/home.js";
import Nav from "./nav.js";
import Up from "./style/up";
import Down from "./style/down";
import Left from "./style/left";
import Right from "./style/right";

class Home extends Component {
  render() {
    return (
      <HomeBox>
        <Nav
          horizontal={this.props.horizontal}
          vertical={this.props.vertical}
          prevVertical={this.props.prevVertical}
          prevHorizontal={this.props.prevHorizontal}
        />
        {this.props.up && (
          <CSSTransition
            appear={true}
            in={true}
            classNames="fade-btn"
            timeout={500}
          >
            <Up className="Up" />
          </CSSTransition>
        )}
        {this.props.down && (
          <CSSTransition
            appear={true}
            in={true}
            classNames="fade-btn"
            timeout={500}
          >
            <Down className="Down" />
          </CSSTransition>
        )}
        <CSSTransition
          appear={true}
          in={true}
          classNames="fade-btn"
          timeout={300}
        >
          <Left className="Left" />
        </CSSTransition>
        <CSSTransition
          appear={true}
          in={true}
          classNames="fade-btn"
          timeout={300}
        >
          <Right className="Right" />
        </CSSTransition>
      </HomeBox>
    );
  }
}

export default Home;
