import React from 'react';
import './TopicItem.css';
import frame from './dirks-gridframe.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopicItem = ({classMod, img, content, hoverContent, click, value}) => {
    return (
      <div className= {"TopicContainer relative  pa2 pointer " + classMod}>
        <span className=" absolute TopicItem-Content sl f1">{content}</span>

      <div className={'flex sl flex-column w5 h5 TopicItem shadow-1 h-400 relative ' }onClick={() => click(value)}>
        <div className="image-container white mt6">
          <FontAwesomeIcon icon={[img.prefix, img.name]} size="10x"/>
        </div>
        <div className="TopicItem-hoverContentContainer ">
          <p className="TopicItem-hoverContentContainer-txt w-100 ph2 pt4 f2">{hoverContent}</p>
          <img className="TopicItem-hoverContentContainer-img w-100"  src={frame} alt="placeholder"/>
        </div>
      </div>
      </div>
    );
}

export default TopicItem;