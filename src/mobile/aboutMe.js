import React from "react";
import AboutMeItem from "./aboutMeItem";

function AboutMe(props) {
  let content;
  if (props.vertical === 1) {
    content = (
      <AboutMeItem
        vertical={props.vertical}
        name={"Edwin"}
        surname={"Harmata"}
        specialization={"Front-end"}
        passion={"Programming, Psychology, Fantasy"}
      />
    );
  } else {
    content = <AboutMeItem vertical={props.vertical} />;
  }

  return <div>{content}</div>;
}

export default AboutMe;
