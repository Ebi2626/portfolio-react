import React from "react";
import "./transition.css";
import { CSSTransition } from "react-transition-group";
import Line from "./style/aboutMe/line";
import Wrapper from "./style/aboutMe/wrapper";

function AboutMeItem(props) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={props.slide}
      timeout={500}
    >
      <Wrapper>
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
}

export default AboutMeItem;
