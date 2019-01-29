import React from 'react';
import './TopNavBar.css';
import NavItem from './NavItem/NavItem'

const TopNavBar = ({changeCategory, category}) =>  {
    return (
      <div className="topnavbar flex flex-wrap block block--sl row-center block--gradient-bottem-right">
        <div className = "navgroup navgroup--left flex w-50 justify-end">
          <div className="navgroup__container">
            <NavItem active={("HOME"=== category)} title='HOME' value='HOME' clickEvent={changeCategory}/>
          </div>
          <div className="navgroup__container">
            <NavItem active={("PROJECTS"=== category)} title='PROJECTS' value='PROJECTS' clickEvent={changeCategory}/>
          </div>
        </div>
        <div className="navgroup navgroup--right flex w-50">
          <div className="navgroup__container">
            <NavItem active={("INTERESTS"=== category) } title='INTERESTS' value='INTERESTS' clickEvent={changeCategory}/>
          </div>
          <div className="navgroup__container">
            <NavItem active={("CONTACTME"=== category)} title='CONTACT ME' value='CONTACTME' clickEvent={changeCategory}/>
          </div>
        </div>
      </div>
    );
}


export default TopNavBar;