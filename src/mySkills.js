import React, { Component } from "react";
import MySkillsWrapper from "./style/mySkills";
import SkillsList from "./skillsList";
import Skill from "./skill";

class MySkills extends Component {
  render() {
    let slide;
    let projectNumber = this.props.vertical - 1;
    if (this.props.prevVertical < this.props.vertical) {
      slide = "slideDown";
    } else {
      slide = "slideUp";
    }
    let Content = SkillsList.map(element => {
      return (
        <Skill
          name={element.name}
          img={element.img}
          level={element.level}
          description={element.description}
          id={"skill-" + element.id}
          slide={slide}
        />
      );
    });

    return <MySkillsWrapper>{Content[projectNumber]}</MySkillsWrapper>;
  }
}

export default MySkills;
