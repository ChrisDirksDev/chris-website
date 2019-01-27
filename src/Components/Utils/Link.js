import React from 'react';
import './Link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({text, mRef, icon}) => {
    return (
      <div className="Link flex">
        <a href={mRef}>
        <FontAwesomeIcon icon={[icon.prefix,icon.name]}/> {text}</a>
      </div>
    );
}

export default Link;