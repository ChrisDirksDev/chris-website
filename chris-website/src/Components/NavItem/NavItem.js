import React, { Component } from 'react';
import './NavItem.css';

const NavItem = ({title}) => {

    return (
      <div className="NavItem">
        <p>{title}</p>
      </div>
    );
  
}

export default NavItem;