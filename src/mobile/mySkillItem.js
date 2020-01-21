import React from "react";
import Wrapper from "./style/mySkills/wrapper";
import Img from "./style/mySkills/img";
import Text from "./style/mySkills/text";
import SkillTitle from "./style/mySkills/title";

export default function MySkillItem(props) {
  return (
    <Wrapper key={props.id}>
      <SkillTitle>
        {props.name}
        <br />
        <em>{props.level}</em>
      </SkillTitle>
      <Img src={props.img} alt={props.name} />
      <Text>{props.description}</Text>
    </Wrapper>
  );
}
