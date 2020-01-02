import React from "react";
import Title from "./style/skillItem/title";
import Img from "./style/skillItem/img";
import Level from "./style/skillItem/level";
import Description from "./style/skillItem/description";

import SkillWrapper from "./style/skillItem/skillWrapper";

function Skill(props) {
  return (
    <SkillWrapper>
      <Title>{props.name}</Title>
      <Level>{props.level}</Level>
      <Img src={props.img} alt={props.name} />
      <Description>{props.description}</Description>
    </SkillWrapper>
  );
}

export default Skill;
