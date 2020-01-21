import React from "react";
import ContactItem from "./contactItem";
import contactList from "./../contactList";

function Contact(props) {
  let currentValue = props.vertical - 1;
  let Content = contactList.map(element => {
    return (
      <ContactItem
        id={"contact-" + element.id}
        name={element.name}
        icon={element.icon}
        content={element.content}
      />
    );
  });
  return <div>{Content[currentValue]}</div>;
}

export default Contact;
