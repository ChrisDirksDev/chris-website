import React from 'react';
import './LeftBarItem.css';

const LeftBarItem = ({title,active, value, click}) => {
    let style = active? "LeftBarItem active": "LeftBarItem";
    return (
      <div className={style} onClick={() =>{ click(value)}}>
        <span>{title}</span>
      </div>
    );
}

export default LeftBarItem;