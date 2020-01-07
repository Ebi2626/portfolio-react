import React, { Component } from "react";
import MyProjectBox from "./style/myProject";
import ProjectsList from "./projectsList";
import ProjectItem from "./projectItem";

class MyProjects extends Component {
  render() {
    let slide;
    let projectNumber = this.props.vertical - 1;
    if (this.props.prevVertical < this.props.vertical) {
      slide = "slideDown";
    } else {
      slide = "slideUp";
    }
    let Content = ProjectsList.map(element => {
      return (
        <ProjectItem
          name={element.name}
          img={element.img}
          demo={element.demo}
          description={element.description}
          id={"project-" + element.id}
          key={"project-" + element.id}
          slide={slide}
        />
      );
    });
    return <MyProjectBox>{Content[projectNumber]}</MyProjectBox>;
  }
}

export default MyProjects;
