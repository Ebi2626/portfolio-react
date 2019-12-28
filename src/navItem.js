import React, { Component } from "react";
import Item from "./style/navItem";

class NavItem extends Component {
  render() {
    return <Item style={this.props.style}>{this.props.element}</Item>;
  }
}
export default NavItem;
