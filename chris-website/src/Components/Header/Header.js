import React, { Component } from 'react';
import logo from '../Media/Pictures/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavBar/>
      </div>
    );
  }
}

export default Header;
