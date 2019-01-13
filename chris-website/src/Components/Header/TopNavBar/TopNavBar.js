import React from 'react';
import './TopNavBar.css';
import NavItem from './NavItem/NavItem'

const TopNavBar = ({changeCategory, category}) =>  {
    return (
      <div className="TopNavBar flex sl row-center border-gradient-bottem-right">
        <div className="navContainer">
          <NavItem active={("HOME"=== category)} title='HOME' value='HOME' clickEvent={changeCategory}/>
        </div>
        <div className="navContainer">
          <NavItem active={("PROJECTS"=== category)} title='PROJECTS' value='PROJECTS' clickEvent={changeCategory}/>
        </div>
        <div className="navContainer">
          <NavItem active={("INTERESTS"=== category) } title='INTERESTS' value='INTERESTS' clickEvent={changeCategory}/>
        </div>
        <div className="navContainer">
          <NavItem active={("CONTACTME"=== category)} title='CONTACT ME' value='CONTACTME' clickEvent={changeCategory}/>
        </div>
      </div>
    );
}


export default TopNavBar;