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
      age: 24,
      passion: ["Programming", "Psychology", "Physic", "MMA", "Fantasy"]
    };
    if (this.props.prevVertical < this.props.vertical) {
      slide = "slideDown";
    } else {
      slide = "slideUp";
    }
    const Text =
      "Hi, my name is Edwin and I am passion-driven front-end developer. I am discovering misterious of front-end since begin of 2019. Till now I have gained knowledge and experience enough to try myself in proffesional programming at position front-end developer. I really like React, JS and fantasy literature. I am also keen on technology in IT and I find core of IT really exciting in general.";
    if (this.props.vertical === 1) {
      return (
        <CSSTransition
          in={true}
          appear={true}
          classNames={slide}
          timeout={500}
          >
          <AboutMeBox>
              <AboutMeItem
                name={Content.name}
                surname={Content.surname}
                age={Content.age}
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
            <AboutMeBox>
                  <AboutMeItem lvl={this.props.vertical} text={Text} />
            </AboutMeBox>
        </CSSTransition>
      );
    }
  }
}

export default AboutMe;
