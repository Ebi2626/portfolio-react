import React from "react";
import projectsList from "./../projectsList";
import MyProjectsItem from "./myProjectsItem";

function MyProjects(props) {
  let currentValue = props.vertical - 1;
  let Content = projectsList.map(element => {
    return (
      <MyProjectsItem
        name={element.name}
        img={element.img}
        demo={element.demo}
        description={element.description}
        id={"project-" + element.id}
        key={"project-" + element.id}
      />
    );
  });
  return <div>{Content[currentValue]}</div>;
}

export default MyProjects;
