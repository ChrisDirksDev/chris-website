import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ImageURL, Content, Link}) => {
    return (
      <div className="ProjectCard flex items-center">
            <img src={ImageURL}/>

            <div className='flex-col items-center shadow-3 ma3 pa2'>
                <p>{Content}</p>
                <a href={Link.ref}>{Link.content}</a>
            </div>
      </div>
    );
}

export default ProjectCard;