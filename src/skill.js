import React from "react";
import Title from "./style/skillItem/title";
import Img from "./style/skillItem/img";
import Level from "./style/skillItem/level";
import Description from "./style/skillItem/description";
import "./transition.css";
import { CSSTransition } from "react-transition-group";

import SkillWrapper from "./style/skillItem/skillWrapper";

function Skill(props) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={props.slide}
      timeout={500}
      key={props.id}
    >
      <SkillWrapper key={props.id}>
        <Title>{props.name}</Title>
        <Level>{props.level}</Level>
        <Img src={props.img} alt={props.name} />
        <Description>{props.description}</Description>
      </SkillWrapper>
    </CSSTransition>
  );
}

export default Skill;
