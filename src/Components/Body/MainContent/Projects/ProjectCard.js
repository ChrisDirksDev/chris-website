import React from 'react';
import './ProjectCard.css';
import frame from '../TopicSelector/dirks-gridframe.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({imageURL, link,title, icon, alt, content, reverse}) => {
    
    let mIcon = (icon==null)? null:<FontAwesomeIcon icon={[icon.prefix,icon.name]} size="xs"/>
    let mLink = (link.ref==null)? null:<a href={link.ref} className="f1 pa2 w5 mt3 shadow-5 button tc">{mIcon}<span className="pl3">{link.content}</span></a>
    return (
      <div className="ProjectCard flex justify-start white">
        <div className="ProjectCard-container flex justify-between">
        <div className='ProjectCard-row1 flex flex-column  items-center w-30 ma3 pa2'>
          <img className="ProjectCard-Img" src={imageURL}/>
          {mLink}
        </div>
        <div className='ProjectCard-row2 flex flex-column w-70 ph4 pt4 relative'>
            <h1 className="ProjectCard-row2-title sl ProjectCard-Title relative">{title}</h1>
            <p className="ProjectCard-row2-content">{content}</p>
            {/* <img className="ProjectCard-row2-frame" src={frame}/> */}
        </div>

        </div>
      </div>
    );
}

export default ProjectCard;