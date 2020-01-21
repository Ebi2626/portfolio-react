import React from "react";
import skillsList from "./../skillsList";
import MySkillItem from "./mySkillItem";

function MySkills(props) {
  let currentValue = props.vertical - 1;
  let Content = skillsList.map(element => {
    return (
      <MySkillItem
        id={element.id}
        name={element.name}
        level={element.level}
        img={element.img}
        description={element.description}
      />
    );
  });
  return <div>{Content[currentValue]}</div>;
}

export default MySkills;
