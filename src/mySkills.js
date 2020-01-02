import React, { Component } from "react";
import MySkillsWrapper from "./style/mySkills";
import SkillsList from "./skillsList";
import Skill from "./skill";

class MySkills extends Component {
  render() {
    let Content = SkillsList.map(element => {
      return (
        <Skill
          name={element.name}
          img={element.img}
          level={element.level}
          description={element.description}
          id={"skill-" + element.id}
        />
      );
    });

    return (
      <MySkillsWrapper>{Content[this.props.vertical - 1]}</MySkillsWrapper>
    );
  }
}

export default MySkills;
