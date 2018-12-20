import React from 'react';
import './HomeContent.css';
import TypeText from '../TypeWriterText/TypewriterText';

const HomeContent = ({onContactClick}) => {
    return (
      <div className="HomeContent flex flex-content">
        <p className='ms h2'>Hey, I'm Chris.</p>
        <div className='flex working-container'>
          <p className='sl h1'>I like working on </p>
          <div className="typedText sl">
            <TypeText typedText={['WEBSITES', 'ENGINES', 'APPS', 'DATABASES']}/>
          </div>
        </div>
        <div className="flex hotlinks ms h3">Check out the <span>projects</span> I've worked on or <span>things</span> I'm interested in.</div>
        <p className='contact-link sl h4' onClick={onContactClick}>Get In Touch</p>
      </div>
    );
}

export default HomeContent;