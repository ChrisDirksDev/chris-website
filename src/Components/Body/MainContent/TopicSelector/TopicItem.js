import React from 'react';
import './TopicItem.css';
import frame from './dirks-gridframe.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopicItem = ({classMod, img, content, hoverContent, click, value}) => {
    return (
      <div className= {"topiccontainer relative pa2 pointer " + classMod}>
        <span className="topicitem__title absolute block--sl f1">{content}</span>
        <div className={'topicitem flex sl flex-column w5 h5 shadow-1 relative ' }onClick={() => click(value)}>
          <div className="topicitem__image white mt6">
            <FontAwesomeIcon icon={[img.prefix, img.name]}/>
          </div>
          <div className="topicitem__hovercontent ">
            <p className="topicitem__hovercontent__content w-100 ph2 pt4 f3">{hoverContent}</p>
            <img className="topicitem__hovercontent__img w-100"  src={frame} alt="placeholder"/>
          </div>
        </div>
      </div>
    );
}

export default TopicItem;