import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="navbar">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </div>

        <div class="main">
        <p>Some text some text some text some text..</p>
        </div>
      </div>
    );
  }
}
 
export default Header;