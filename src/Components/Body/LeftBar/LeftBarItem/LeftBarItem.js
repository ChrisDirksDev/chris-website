import React from 'react';
import './LeftBarItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftBarItem = ({title, icon, active, value, click}) => {
    let style = active? " active": "";
    return (
      <div className={"LeftBarItem flex pointer ml3 white fw6" + style} onClick={() =>{ click(value)}}>
        <FontAwesomeIcon icon={[icon.prefix, icon.name]} size=""/>
        <span>{title}</span>
      </div>
    );
}

export default LeftBarItem;