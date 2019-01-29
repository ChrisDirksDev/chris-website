import React from 'react';
import './Header.css';
import TopNavBar from './TopNavBar/TopNavBar';
import logo from './dirksbird.svg'
const Header = ({changeCategory, category}) => {
    return (
      <div className="header flex">
        <div className='logobox block flex relative block--gradient-right-up block--gradient-bottem-left'>
          <img className='logobox__logo' src={logo} alt='Logo' />
        </div>
        <TopNavBar changeCategory = {changeCategory} category = {category}/>
      </div>
    );
}

export default Header;
