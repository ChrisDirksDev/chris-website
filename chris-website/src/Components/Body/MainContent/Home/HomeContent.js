import React from 'react';
import './HomeContent.css';
import TypeText from '../TypeWriterText/TypewriterText';

const HomeContent = ({onContactClick}) => {
    return (
      <div className="HomeContent flex-col">
        <p className='ms f1 lh-title fw8'>Hey, I'm Chris.</p>
        <div className='flex working-container lh-solid fw4'>
          <span className='sl'>I like working on </span>
          <div className="typedText sl">
            <TypeText typedText={['WEBSITES', 'ENGINES', 'APPS', 'DATABASES']}/>
          </div>
        </div>
        <div className="flex hotlinks f1 lh-copy ms mt7">Check out the <span>projects</span> I've worked on or <span>things</span> I'm interested in.</div>
        <p className='contact-link sl f-headline lh-copy' onClick={onContactClick}>Get In Touch</p>
      </div>
    );
}

export default HomeContent;