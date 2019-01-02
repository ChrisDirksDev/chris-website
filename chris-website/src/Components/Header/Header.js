import React from 'react';
import './Header.css';
import TopNavBar from './TopNavBar/TopNavBar';
import logo from './dirksbird.svg'
const Header = ({onLinkChange, activeLink}) => {
    return (
      <div className="Header flex">
        <div className='logobox border-gradient-right-up border-gradient-bottem-left'>
          <img className='logo' src={logo} alt='Logo' style={{ height: 81, width: 180}}></img>
        </div>
        <TopNavBar onLinkChange = {onLinkChange} activeLink = {activeLink}/>
      </div>
    );
}

export default Header;
