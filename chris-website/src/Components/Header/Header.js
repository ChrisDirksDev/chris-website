import React from 'react';
import './Header.css';
import TopNavBar from './TopNavBar/TopNavBar';
import logo from './dirksbird.svg'
const Header = ({changeCategory, category}) => {
    return (
      <div className="Header flex">
        <div className='logobox relative border-gradient-right-up border-gradient-bottem-left'>
          <img className='logo' src={logo} alt='Logo' style={{ height: 81, width: 180}}/>
        </div>
        <TopNavBar changeCategory = {changeCategory} category = {category}/>
      </div>
    );
}

export default Header;
