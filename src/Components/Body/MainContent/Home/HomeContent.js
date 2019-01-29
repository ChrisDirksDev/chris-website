import React from 'react';
import './HomeContent.css';
import TypeText from '../TypeWriterText/TypewriterText';
import AButton from '../../../Utils/AButton';

const HomeContent = ({onContactClick}) => {
    return (
      <div className="homecontent flex flex-column items-center">

        <p className='ms homecontent__title lh-title f1 mv5 fw8  white'>Hey, I'm Chris.</p>
          <div className='workingline flex flex-wrap lh-solid fw4'>
            <span className='workingline__front block--sl'>I like working with </span>
            <div className="workingline__typedtext flex block--sl ">
              <TypeText typedText={['WEBSITES', 'GRAPHICS RENDERING', 'DESKTOP APPLICATIONS', 'DATABASES']}/>
            </div>
          </div>
          <div className="hotlinks flex flex-wrap justify-center lh-copy ms">
            <span>Check out the </span>
            <span onClick={() =>{onContactClick("PROJECTS")}} className="text--hover_orange underline white pointer">projects</span> 
            <span> I've worked on or </span>
            <span onClick={() =>{onContactClick("INTERESTS")}} className="text--hover_orange underline white pointer">things</span> 
            <span> I'm interested in.</span>
          </div>
          {/* TODO: Use a component here */}
          <div className="homecontent__contactbutton mt5">
            <AButton text="Get In Touch" callback={() =>{onContactClick("CONTACTME")}} />
          </div>
  
      </div>
    );
}

export default HomeContent;