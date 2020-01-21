import React, { useState } from "react";
import Img from "./style/myProjects/img";
import Wrapper from "./style/myProjects/wrapper";
import Text from "./style/myProjects/text";
import Title from "./style/myProjects/title";

export default function MyProjectItem(props) {
  const [picture, setPicture] = useState(false);
  let toggleOn = {
    position: "fixed",
    width: "calc(100vw - 90px)",
    maxHeight: "calc(100vh - 100px)",
    height: "auto"
  };
  let toggleOff = {
    position: "relative",
    width: 100,
    height: "auto"
  };

  return (
    <Wrapper>
      <Title style={picture ? { opacity: 0 } : { opacity: 1 }}>{props.name}</Title>
      <Img
        src={props.img}
        id={props.name.replace(" ", "")}
        alt={props.name}
        onClick={() => {
          setPicture(!picture);
        }}
        style={picture ? toggleOn : toggleOff}
      />
      <Text style={picture ? { opacity: 0 } : { opacity: 1 }}>
        {props.description}
      </Text>
      <p style={picture ? { opacity: 0 } : { opacity: 1 }}>
        <a href={props.demo}>Demo</a>
      </p>
    </Wrapper>
  );
}
