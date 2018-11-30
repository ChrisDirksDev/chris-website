import React, { Component } from 'react';
import './LeftBar.css';
import LeftBarItem from '../LeftBarItem/LeftBarItem'

class LeftBar extends Component {
  render() {
    return (
      <div className="LeftBar Flex-Content">
        <LeftBarItem title ='Home'/>
        <LeftBarItem title ='Projects'/>
        <LeftBarItem title ='Interests'/>
        <LeftBarItem title ='Contact me'/>
      </div>
    );
  }
}

export default LeftBar;