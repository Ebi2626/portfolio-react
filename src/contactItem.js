import React from "react";
import Content from "./style/contactItem/content";
import Title from "./style/contactItem/title";
import Wrapper from "./style/contactItem/wrapper";
import "./transition.css";
import { CSSTransition } from "react-transition-group";
import "./style.css";

function ContactItem(props) {
  let contentValue;
  let html = new RegExp(/http/);
  let mail = new RegExp(/@/);
  if (props.content.match(html)) {
    contentValue = (
      <a
        style={{ position: "relative" }}
        className="tooltip"
        href={props.content}
      >
        {props.content}
      </a>
    );
  } else if (props.content.match(mail)) {
    contentValue = (
      <a
        style={{ position: "relative" }}
        className="tooltip"
        href={"mailto:" + props.content}
      >
        {props.content}
      </a>
    );
  } else {
    contentValue = (
      <a
        style={{ position: "relative" }}
        className="tooltip"
        href={"tel:+48" + props.content}
      >
        {props.content}
      </a>
    );
  }

  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={props.slide}
      timeout={500}
      key={props.id}
    >
      <Wrapper key={props.id}>
        <Title>{props.name}</Title>
        {props.icon}
        <Content>{contentValue}</Content>
      </Wrapper>
    </CSSTransition>
  );
}

export default ContactItem;
