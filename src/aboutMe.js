import React, { Component } from "react";
import AboutMeBox from "./style/aboutMe";
import Image from "./style/img";

class AboutMe extends Component {
  render() {
    return (
      <AboutMeBox>
        <Image src="/EdwinHarmata.png" alt="Edwin Harmata" />
        <p>
          I have graduated in business psychology year ago and since that time I
          spent most of my free time on programming. I'm always hungry for
          knowledge and I always feel a huge need to achieve more and more. For
          now, my "more" is to become Junior Front-End Developer and I'm ready
          to prove my skills. I also want to invite you to check my portfolio
          and GitHub profile, where you can find all my project from my
          beginning at the programming path.
        </p>
      </AboutMeBox>
    );
  }
}

export default AboutMe;
