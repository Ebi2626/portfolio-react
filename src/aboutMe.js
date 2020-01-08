import React, { Component } from "react";
import AboutMeBox from "./style/aboutMe";
import Image from "./style/img";
import AboutMeItem from "./aboutMeItem";

class AboutMe extends Component {
  render() {
    let Content = {
      name: "Edwin",
      surname: "Harmata",
      age: 24,
      passion: ["Programming", "Psychology", "Physic", "MMA", "Fantasy"]
    };

    return (
      <AboutMeBox>
        <AboutMeItem
          name={Content.name}
          surname={Content.surname}
          age={Content.age}
          passion={Content.passion}
        />
      </AboutMeBox>
    );
  }
}

export default AboutMe;
