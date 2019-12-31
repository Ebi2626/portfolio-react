import React, { Component } from "react";
import MyProjectBox from "./style/myProject";
import ProjectsList from "./projectsList";
import ProjectItem from "./projectItem";

class MyProjects extends Component {
  render() {
    let Content = ProjectsList.map(element => {
      return (
        <ProjectItem
          name={element.name}
          img={element.img}
          demo={element.demo}
          description={element.description}
          id={"project-" + element.id}
        />
      );
    });

    return <MyProjectBox>{Content[this.props.vertical - 1]}</MyProjectBox>;
  }
}

export default MyProjects;
