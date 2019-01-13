import React from 'react';
import './NavItem.css';

const NavItem = ({active, title, value, clickEvent}) => {
    return (
      <div className={'NavItem pointer' + ((active)? ' active':'')} onClick={ () => {clickEvent(value)}}>
        <span>{title}</span>
      </div>
    );
}

export default NavItem;