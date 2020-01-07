import React from "react";
import "./transition.css";
import { CSSTransition } from "react-transition-group";
import Line from "./style/aboutMe/line";

function AboutMeItem(props) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={props.slide}
      timeout={500}
    >
      <div>
        <Line>
          <h1>
            Name:
            <span style={{ marginLeft: "auto", marginRight: 10 }}>
              {props.name}
            </span>
          </h1>
        </Line>
        <Line>
          <h1>
            Surname:
            <span style={{ marginLeft: "auto", marginRight: 10 }}>
              {props.surName}
            </span>
          </h1>
        </Line>
        <Line>
          <h1>
            Age:
            <span style={{ marginLeft: "auto", marginRight: 10 }}>
              {props.age}
            </span>
          </h1>
        </Line>
        <Line>
          <h1>
            Passion:
            <span style={{ marginLeft: "auto", marginRight: 10 }}>
              {props.passion}
            </span>
          </h1>
        </Line>
      </div>
    </CSSTransition>
  );
}

export default AboutMeItem;
