import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div>
        <div class="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="#news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>

        <div class="main">
        <p>Some text some text some text some text..</p>
        </div>
      </div>
    );
  }
}
 
export default Header;