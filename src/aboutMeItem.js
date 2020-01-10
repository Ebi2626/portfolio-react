import React from "react";
import "./transition.css";
import { CSSTransition } from "react-transition-group";
import Line from "./style/aboutMe/line";
import Image from "./style/img";
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
        <Wrapper lvl={props.lvl} key={1}>
            <Line>
              <h1>Name:</h1>
              <h2>{props.name}</h2>
            </Line>
            <Line>
              <h1>Surname:</h1>
              <h2>{props.surname}</h2>
            </Line>
            <Line>
              <h1>Age:</h1>
              <h2>{props.age}</h2>
            </Line>
            <Line>
              <h1>Passion:</h1>
              <ul>
                {props.passion.map(element => (
                  <li>{element}</li>
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
        <Wrapper lvl={props.lvl} key={2} style={{ border: "solid 1px blue" }}>
            <Image src="./EdwinHarmata.png" alt="Edwin Harmata" />
            <AboutMeText>{props.text}</AboutMeText>
        </Wrapper>
      </CSSTransition>
    );
  }
}

export default AboutMeItem;
