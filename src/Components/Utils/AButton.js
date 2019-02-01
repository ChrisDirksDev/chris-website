// <a/> html element styled like a button

import React from 'react';
import './AButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AButton = ({text, mRef=null, callback, icon = null}) => {
    return (
        <a className="abutton ph2" onClick={callback} href={mRef}>
            <div className='abutton__container flex justify-center'>
                <div class="abutton__icon pr2">
                    {(icon != null)?  <FontAwesomeIcon icon={[icon.prefix,icon.name]}/>:null }
                </div>
                <span className='abutton__text'>{text}</span>
            </div>
        </a>
    );
}

export default AButton;