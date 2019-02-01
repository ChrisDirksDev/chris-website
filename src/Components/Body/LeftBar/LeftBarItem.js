import React from 'react';
import './LeftBarItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftBarItem = ({title, icon, active, value, click}) => {
    let style = active? " leftbaritem--active": "";
    return (
      <div className={"leftbaritem flex pointer ml3 fw6" + style} onClick={() =>{ click(value)}}>
        <div className="fontawesomeicon">
          <FontAwesomeIcon icon={[icon.prefix, icon.name]}/>
        </div>
        <span>{title}</span>
      </div>
    );
}

export default LeftBarItem;