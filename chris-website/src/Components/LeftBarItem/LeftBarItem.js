import React from 'react';
import './LeftBarItem.css';

const LeftBarItem = ({title}) => {
    return (
      <div className="LeftBarItem">
        <p>{title}</p>
      </div>
    );
}

export default LeftBarItem;