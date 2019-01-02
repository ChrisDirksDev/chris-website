import React from 'react';
import './SelectLeftContent.css';
import Arrow from './right-arrow-outline.svg'

const SelectLeftContent = ({Content, linkCount}) => {
    let arrowVerticleMovement = (linkCount*49).toString() + 'px';
    return (
      <div className="SelectLeftContent flex">
          <div style = {{height: arrowVerticleMovement }} className="arrowContainer flex">
            <img src={Arrow}/>
          </div>
        <p className='sl h1'>{Content.toString()} </p>

      </div>
    );
}

export default SelectLeftContent;