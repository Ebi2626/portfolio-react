import React, { useState, useEffect } from "react";
import "./mobile.css";
import ContentTitle from "./style/m_contentTitle";
import PortfolioWrapper from "./style/m_portfolio";
import ContentWrapper from "./style/m_contentWrapper";
import AboutMe from "./aboutMe";
import MyProjects from "./myProjects";
import MySkills from "./mySkills";
import Contact from "./contact";
import Up from "./../style/up";
import Down from "./../style/down";
import Left from "./../style/left";
import Right from "./../style/right";

// Logic of this version of app is really similar to the desktop one
// However I wrote it a little bit later than desktop version,
// so the logic is a little better and the code is a little cleaner

export default function Portfolio() {
  let itemTitle, content;
  const [vertical, setVertical] = useState(1);
  const [horizontal, setHorizontal] = useState(1);
  useEffect(() => {
    // Just example of useEffect hook - here we make us
    // ensure that user will see cursor on little screens
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.cursor = "auto";
    document.querySelector("body").style.userSelect = "none";
  });
  //Function to going into the depth of app
  function addVertical() {
    highlight("down");
    let prevVertical = vertical;
    let newVertical = vertical + 1;
    let maxVertical;
    switch (horizontal) {
      case 1:
        maxVertical = 2;
        break;
      case 2:
        maxVertical = 5;
        break;
      case 3:
        maxVertical = 16;
        break;
      case 4:
        maxVertical = 4;
        break;
      default:
        console.log(
          "Some error during vertical movement in portfolio component"
        );
        break;
    }
    // Block increasing vertical level when it's max
    if (prevVertical < maxVertical) {
      setVertical(newVertical);
    } else {
      setVertical(maxVertical);
    }
  }
  // Function to move up
  function substractVertical() {
    highlight("up");
    let prevVertical = vertical;
    if (prevVertical > 1) {
      setVertical(prevVertical - 1);
    } else {
      setVertical(1);
    }
  }
  // Going right
  function addHorizontal() {
    highlight("right");
    let prevHorizontal = horizontal;
    setVertical(1);
    if (prevHorizontal < 4) {
      setHorizontal(prevHorizontal + 1);
    } else {
      setHorizontal(1);
    }
  }
  // Going left
  function substractHorizontal() {
    highlight("left");
    let prevHorizontal = horizontal;
    setVertical(1);
    if (prevHorizontal > 1) {
      setHorizontal(prevHorizontal - 1);
    } else {
      setHorizontal(4);
    }
  }
  // Changing application content depends on state
  switch (horizontal) {
    case 1:
      itemTitle = "About me";
      content = <AboutMe horizontal={horizontal} vertical={vertical} />;
      break;
    case 2:
      itemTitle = "My projects";
      content = <MyProjects vertical={vertical} />;
      break;
    case 3:
      itemTitle = "My skills";
      content = <MySkills vertical={vertical} />;
      break;
    case 4:
      itemTitle = "Contact";
      content = <Contact vertical={vertical} />;
      break;
    default:
      console.log("Some error during naming the title");
      break;
  }
  // Function to animate clikcing on the arrows with ES6+ syntax
  function highlight(idElementu) {
    if (document.querySelector(`#${idElementu}`) !== null) {
      let element = document.querySelector(`#${idElementu}`);
      element.style.opacity = 1;
      setTimeout(() => {
        element !== null
          ? (element.style.opacity = 0.3)
          : console.log("Error during animate arrows");
      }, 300);
    }
  }
  return (
    <PortfolioWrapper>
      <ContentTitle>{itemTitle}</ContentTitle>
      <ContentWrapper>{content}</ContentWrapper>
      <Up id={"up"} onClick={substractVertical} />
      <Down id={"down"} onClick={addVertical} />
      <Left id={"left"} onClick={substractHorizontal} />
      <Right id={"right"} onClick={addHorizontal} />
    </PortfolioWrapper>
  );
}
