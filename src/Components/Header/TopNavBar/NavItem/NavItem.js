import React from 'react';
import './NavItem.css';

const NavItem = ({active, title, value, clickEvent}) => {
    return (
      <div className={'navitem pointer' + ((active)? ' navitem--active':'')} onClick={ () => {clickEvent(value)}}>
        <span className="navitem__title">{title}</span>
      </div>
    );
}

export default NavItem;