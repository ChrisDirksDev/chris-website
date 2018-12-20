import React from 'react';
import './NavItem.css';

const NavItem = ({active,title, value,  clickEvent}) => {
    return (
      <div className={(active===true)? 'active NavItem':'NavItem'} onClick={ (e) => {clickEvent(e,{value})}}>
        <p>{title}</p>
      </div>
    );
}

export default NavItem;