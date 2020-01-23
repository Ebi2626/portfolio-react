import React from "react";
import Wrapper from "./style/aboutMe/wrapper";
import InnerWrapper from "./style/aboutMe/innerWrapper";
import Line from "./style/aboutMe/line";
import Text from "./style/aboutMe/text";

export default function AboutMeItem(props) {
  let content;
  if (props.vertical === 1) {
    content = (
      <Wrapper>
        <InnerWrapper>
          <Line>
            <span>Name:</span> <span>{props.name}</span>
          </Line>
          <Line>
            <span>Surname:</span>
            <span>{props.surname}</span>
          </Line>
          <Line>
            <span>Specialization:</span>
            <span>{props.specialization}</span>
          </Line>
          <Line>
            <span>Passion: </span>
            <span>{props.passion}</span>
          </Line>
        </InnerWrapper>
      </Wrapper>
    );
  } else {
    content = (
      <Text>
        Hi, my name is Edwin and I created this page for you. I want to show you two facts: I can use React.js to build apps and I have some experience in programming. I have been learning front-end programming since 2019 and since October I am studying IT at WSZiB in Krakow. Currently, I am looking for a challenge at the job market in the position of a junior front-end developer.
      </Text>
    );
  }

  return <Wrapper>{content}</Wrapper>;
}
