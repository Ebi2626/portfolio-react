import React, { Component } from "react";
import AboutMeBox from "./style/aboutMe";
import AboutMeItem from "./aboutMeItem";
import { CSSTransition } from "react-transition-group";
import "./transition.css";

class AboutMe extends Component {
  render() {
    let slide;
    const Content = {
      name: "Edwin",
      surname: "Harmata",
      specialization: "Front-end",
      passion: ["Programming", "Psychology", "Fantasy"]
    };
    if (this.props.prevVertical < this.props.vertical) {
      slide = "slideDown";
    } else {
      slide = "slideUp";
    }
    const Text =
      "Hi, my name is Edwin and I create this page for you. I want to show you two facts: I can use React.js to build apps and I have some experience in programming. I have been learning front-end programming since 2019 and since October I am studying IT. Currently I am looking for another challenge at job market in position of junior front-end developer.";
    if (this.props.vertical === 1) {
      return (
        <CSSTransition in={true} appear={true} classNames={slide} timeout={500}>
          <AboutMeBox>
            <AboutMeItem
              name={Content.name}
              surname={Content.surname}
              specialization={Content.specialization}
              passion={Content.passion}
              lvl={this.props.vertical}
              slide={slide}
            />
          </AboutMeBox>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition
          in={true}
          appear={true}
          classNames="slide"
          timeout={500}
          slide={slide}
        >
          <AboutMeBox
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: " center"
            }}
          >
            <AboutMeItem lvl={this.props.vertical} text={Text} />
          </AboutMeBox>
        </CSSTransition>
      );
    }
  }
}

export default AboutMe;
