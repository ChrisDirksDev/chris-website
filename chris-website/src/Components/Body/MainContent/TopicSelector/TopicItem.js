import React from 'react';
import './TopicItem.css';

const TopicItem = ({img, content, hoverEvent, value, click, clickValue}) => {
    return (
      <div className="flex-col TopicItem flex shadow-1" onMouseEnter={(e) => {hoverEvent(e,value)}} onClick={() => click(clickValue)}>
        <div className="flex image-container">
          <img src={img} alt="placeholder"/>
        </div>
        <span className="">{content}</span>
      </div>
    );
}

export default TopicItem;