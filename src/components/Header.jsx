import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Header extends Component {
  render() {
    return ( 
        <div class="navbar">
        <a href="#" className="logo"></a>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="#news">News</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </div>
    );
  }
}
 
export default Header;