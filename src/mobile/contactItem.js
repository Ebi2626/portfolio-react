import React from "react";
import Wrapper from "./style/contact/wrapper";
import Title from "./style/contact/title";

function ContactItem(props) {
  let contentValue;
  let html = new RegExp(/http/);
  let mail = new RegExp(/@/);
  if (props.content.match(html)) {
    contentValue = (
      <a style={{ position: "relative" }} href={props.content}>
        {props.content}
      </a>
    );
  } else if (props.content.match(mail)) {
    contentValue = (
      <a style={{ position: "relative" }} href={"mailto:" + props.content}>
        {props.content}
      </a>
    );
  } else {
    contentValue = (
      <a style={{ position: "relative" }} href={"tel:+48" + props.content}>
        {props.content}
      </a>
    );
  }

  return (
    <Wrapper key={props.id}>
      <Title>{props.name}</Title>
      {props.icon}
      <p style={{ textAlign: "center" }}>{contentValue}</p>
    </Wrapper>
  );
}

export default ContactItem;
