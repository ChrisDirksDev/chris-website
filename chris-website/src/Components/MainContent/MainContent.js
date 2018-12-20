import React from 'react';
import './MainContent.css';
import HomeContent from './Home/HomeContent';
import ContactForm from './Contact/ContactForm';
import TypeText from './TypeWriterText/TypewriterText'
const MainContent = ({activeLink, onContactClick}) => {
    switch (activeLink) {
      case 'CONTACTME':
      return (
        <div className="MainContent Flex Flex-Content">
          <ContactForm/>
        </div>
      );
      case 'PROJECTS':
      return (
        <div className="MainContent Flex col-center row-center">
          <TypeText typedText={["Test", "Data", "Okay"]}/>
        </div>
      );
      case 'HOME':
      default:
      return (
        <div className="MainContent Flex Flex-Content">
          <HomeContent onContactClick={onContactClick}/>
        </div>
      );
    }

}

export default MainContent;