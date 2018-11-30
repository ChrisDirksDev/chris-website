import React, { Component } from 'react';
import './Header.css';
import TopNavBar from '../TopNavBar/TopNavBar';

class Header extends Component {
  render() {
    return (
      <div className="Header Flex Flex-Content">
        <TopNavBar/>
      </div>
    );
  }
}

export default Header;
