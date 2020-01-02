import React, { Component } from "react";
import ContactBox from "./style/contact";
import ContactItem from "./contactItem";
import ContactList from "./contactList";

class Contact extends Component {
  render() {
    const Content = ContactList.map(element => {
      return (
        <ContactItem
          id={"contact-" + element.id}
          name={element.name}
          icon={element.icon}
          content={element.content}
        />
      );
    });
    return <ContactBox>{Content[this.props.vertical - 1]}</ContactBox>;
  }
}

export default Contact;
