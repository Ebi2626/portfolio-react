import React from "react";
import "./transition.css";
import { CSSTransition } from "react-transition-group";
import Line from "./style/aboutMe/line";
import Wrapper from "./style/aboutMe/wrapper";
import AboutMeText from "./style/aboutMe/aboutMeText";

function AboutMeItem(props) {
  if (props.lvl === 1) {
    return (
      <CSSTransition
        in={true}
        appear={true}
        classNames={props.slide}
        timeout={500}
      >
        <Wrapper lvl={props.lvl} key={1} style={{ height: "100%" }}>
          <Line>
            <h1>Name:</h1>
            <h2>{props.name}</h2>
          </Line>
          <Line>
            <h1>Surname:</h1>
            <h2>{props.surname}</h2>
          </Line>
          <Line>
            <h1>Specialization:</h1>
            <h2>{props.specialization}</h2>
          </Line>
          <Line>
            <h1>Passion:</h1>
            <ul>
              {props.passion.map(element => (
                <li key={element}>{element}</li>
              ))}
            </ul>
          </Line>
        </Wrapper>
      </CSSTransition>
    );
  } else {
    return (
      <CSSTransition
        in={true}
        appear={true}
        classNames={props.slide}
        timeout={500}
      >
        <Wrapper lvl={props.lvl} key={2}>
          <AboutMeText style={{ height: "auto !important" }}>
            {props.text}
          </AboutMeText>
        </Wrapper>
      </CSSTransition>
    );
  }
}

export default AboutMeItem;
