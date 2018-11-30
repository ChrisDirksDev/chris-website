import React, { Component } from 'react';
import './TopNavBar.css';
import NavItem from '../NavItem/NavItem'
import logo from './large.jpg'
class TopNavBar extends Component {
  render() {
    return (
      <div className="TopNavBar Flex Flex-Content">
        <NavItem title='Home'/>
        <NavItem title='Projects'/>
        <img className='logo' src={logo} style={{ height: 100, width: 100}}></img>
        <NavItem title='Interests'/>
        <NavItem title='Contact Me'/>
      </div>
    );
  }
}

export default TopNavBar;