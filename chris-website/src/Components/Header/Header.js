import React from 'react';
import './Header.css';
import TopNavBar from '../TopNavBar/TopNavBar';

const Header = ({onLinkChange, activeLink}) => {
    return (
      <div className="Header flex">
        <TopNavBar onLinkChange = {onLinkChange} activeLink = {activeLink}/>
      </div>
    );
}

export default Header;
