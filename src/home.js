import React, { Component } from "react";
import HomeBox from "./style/home.js";
import Nav from "./nav.js";

class Home extends Component {
  render() {
    return (
      <HomeBox>
        <Nav
          horizontal={this.props.horizontal}
          vertical={this.props.vertical}
        />
      </HomeBox>
    );
  }
}

export default Home;
