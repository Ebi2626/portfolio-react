import React from "react";
import Title from "./style/projectItem/title";
import Img from "./style/projectItem/img";
import Demo from "./style/projectItem/demo";
import Description from "./style/projectItem/description";
import "./transition.css";
import { CSSTransition } from "react-transition-group";

import ProjectWrapper from "./style/projectItem/projectWrapper";

function ProjectItem(props) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={props.slide}
      timeout={500}
    >
      <ProjectWrapper>
        <Title>{props.name}</Title>
        <Img src={props.img} alt={props.name} />
        <Description>{props.description}</Description>
        <Demo className="tooltip" href={props.demo}>
          Demo
        </Demo>
      </ProjectWrapper>
    </CSSTransition>
  );
}

export default ProjectItem;
