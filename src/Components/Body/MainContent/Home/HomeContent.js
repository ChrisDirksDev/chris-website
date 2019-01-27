import React from 'react';
import './HomeContent.css';
import TypeText from '../TypeWriterText/TypewriterText';

const HomeContent = ({onContactClick}) => {
    return (
      <div className="HomeContent flex flex-column items-center">

        <p className='ms HomeContent-Title lh-title f1 mv5 fw8  white'>Hey, I'm Chris.</p>
          <div className='flex flex-wrap working-container lh-solid fw4'>
            <span className='sl'>I like working with </span>
            <div className="typedText flex sl ">
              <TypeText typedText={['WEBSITES', 'GRAPHICS RENDERING', 'DESKTOP APPLICATIONS', 'DATABASES']}/>
            </div>
          </div>
          <div className="hotlinks flex flex-wrap justify-center lh-copy ms">
            <span>Check out the </span>
            <span onClick={() =>{onContactClick("PROJECTS")}} className="underline white pointer">projects</span> 
            <span> I've worked on or </span>
            <span onClick={() =>{onContactClick("INTERESTS")}} className="underline white pointer">things</span> 
            <span> I'm interested in.</span>
          </div>
          {/* TODO: Use a component here */}
          <button className="w7 h4 mt4 shadow-5" onClick={() =>{onContactClick("CONTACTME")}}><span className="">Get In Touch</span></button>
      </div>
    );
}

export default HomeContent;