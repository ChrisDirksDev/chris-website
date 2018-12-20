import React from 'react';
import './TopNavBar.css';
import NavItem from '../NavItem/NavItem'
import logo from './large.jpg'
const TopNavBar = ({onLinkChange, activeLink}) =>  {
    let test = ("HOME"=== activeLink)? 'active':''
    return (
      <div className="TopNavBar flex">
        <div className="navContainer">
        <NavItem active={("HOME"=== activeLink)} title='HOME' value='HOME' clickEvent={onLinkChange}/>

        </div>
        <div className="navContainer">
        <NavItem active={("PROJECTS"=== activeLink)} title='PROJECTS' value='PROJECTS' clickEvent={onLinkChange}/>
          
        </div>
        <div className="navContainer logo">
        <img className='logo' src={logo} alt='Logo' style={{ height: 50, width: 50}}></img>
          
        </div>
        <div className="navContainer">
        <NavItem active={("INTERESTS"=== activeLink) } title='INTERESTS' value='INTERESTS' clickEvent={onLinkChange}/>
          
        </div>
        <div className="navContainer">
        <NavItem active={("CONTACTME"=== activeLink)} title='CONTACT ME' value='CONTACTME' clickEvent={onLinkChange}/>
          
        </div>
      </div>
    );
}


export default TopNavBar;