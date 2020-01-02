import React from "react";
import Content from "./style/contactItem/content";
import Title from "./style/contactItem/title";
import Wrapper from "./style/contactItem/wrapper";

function ContactItem(props) {
  let contentValue;
  let html = new RegExp(/http/);
  let mail = new RegExp(/@/);
  if (props.content.match(html)) {
    contentValue = <a href={props.content}>{props.content}</a>;
  } else if (props.content.match(mail)) {
    contentValue = <a href={"mailto:" + props.content}>{props.content}</a>;
  } else {
    contentValue = <a href={"tel:+48" + props.content}>{props.content}</a>;
  }

  return (
    <Wrapper>
      <Title>{props.name}</Title>
      {props.icon}
      <Content>{contentValue}</Content>
    </Wrapper>
  );
}

export default ContactItem;
