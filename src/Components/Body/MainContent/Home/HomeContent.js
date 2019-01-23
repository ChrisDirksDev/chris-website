import React from 'react';
import './HomeContent.css';
import TypeText from '../TypeWriterText/TypewriterText';

const HomeContent = ({onContactClick}) => {
    return (
      <div className="HomeContent  items-center flex flex-column">
        <p className='ms mt5 f1 lh-title fw8 white'>Hey, I'm Chris.</p>
        <div className='flex working-container items-center ml7 lh-solid fw4'>
          <span className='sl'>I like working on </span>
          <div className="typedText sl">
            <TypeText typedText={['WEBSITES', 'ENGINES', 'APPS', 'DATABASES']}/>
          </div>
        </div>
        <div className="hotlinks f1 lh-copy ms mt7">Check out the <span  onClick={() =>{onContactClick("PROJECTS")}} className="underline white pointer">projects</span> I've worked on or <span onClick={() =>{onContactClick("INTERESTS")}} className="underline white pointer">things</span> I'm interested in.</div>
        <button className="w7 h4 mt4 f-subheadline shadow-5" onClick={() =>{onContactClick("CONTACTME")}}><span className="">Get In Touch</span></button>
      </div>
    );
}

export default HomeContent;