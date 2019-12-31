import React from "react";
import Title from "./style/projectItem/title";
import Img from "./style/projectItem/img";
import Demo from "./style/projectItem/demo";
import Description from "./style/projectItem/description";

import ProjectWrapper from "./style/projectItem/projectWrapper";

function ProjectItem(props) {
  return (
    <ProjectWrapper>
      <Title>{props.name}</Title>
      <Img src={props.img} alt={props.name} />
      <Description>{props.description}</Description>
      <p>
        <Demo href={props.demo}>Demo</Demo>
      </p>
    </ProjectWrapper>
  );
}

export default ProjectItem;
