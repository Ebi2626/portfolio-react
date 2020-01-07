import React, { Component } from "react";
import ContactBox from "./style/contact";
import ContactItem from "./contactItem";
import ContactList from "./contactList";

class Contact extends Component {
  render() {
    let slide;
    let projectNumber = this.props.vertical - 1;
    if (this.props.prevVertical < this.props.vertical) {
      slide = "slideDown";
    } else {
      slide = "slideUp";
    }
    const Content = ContactList.map(element => {
      return (
        <ContactItem
          id={"contact-" + element.id}
          name={element.name}
          icon={element.icon}
          content={element.content}
          slide={slide}
        />
      );
    });
    return <ContactBox>{Content[projectNumber]}</ContactBox>;
  }
}

export default Contact;
