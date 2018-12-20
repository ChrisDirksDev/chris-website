import React from 'react';
import './LeftBar.css';
import LeftBarItem from '../LeftBarItem/LeftBarItem'

const LeftBar = ({leftHideShow,activeLink, prevLink}) =>  {

  let callback = () => {
    return;
  };
  let LeftContainer = "LeftContainer"
  let projectStyle = "projects child", InterestStyle = "interests child",containerStyle = 'LeftBar';
  let showing = false;

  let hideshowoption = activeLink===prevLink? ' no-anim':'';
  switch (activeLink){
    case 'PROJECTS':
      
    if (leftHideShow) {
      InterestStyle+= ' hideSlow';
      containerStyle+= ' hideshowProjects';
      projectStyle+= ' showSlow';
    }else{
        InterestStyle+= ' hide';
        containerStyle+= ' show';
        projectStyle+= ' showFast';
      }
      containerStyle+= hideshowoption;
      showing= true;
      break;
    case 'INTERESTS':
    if (leftHideShow) {
        projectStyle+= ' hideSlow';
        containerStyle+= ' hideshowInterests';
        InterestStyle+= ' showSlow';
      }else{
        projectStyle+= ' hide';
        containerStyle+= ' show';
        InterestStyle+= ' showFast';
      }
      containerStyle+= hideshowoption;
      showing = true;
      break;
    case 'CONTACTME':
    case 'HOME':
    default:
    projectStyle+= ' hide';
    InterestStyle+= ' hide';
    containerStyle+= ' hide';
    LeftContainer+= ' hide'
      break;
    }

  return (
    <div className ={LeftContainer}>
      <div className={containerStyle}>
        <div className={InterestStyle}>
            <LeftBarItem title ='Interest 1'/>
            <LeftBarItem title ='Interest 2'/>
            <LeftBarItem title ='Interest 3'/>
            <LeftBarItem title ='Interest 4'/>
        </div>
        <div className={projectStyle}>
            <LeftBarItem title ='This Website'/>
            <LeftBarItem title ='Spoopy - Chat Bot'/>
            <LeftBarItem title ='2D Game Engine'/>
            <LeftBarItem title ='Webworker demos'/>
        </div>
      </div>
      
    </div>
  );
};

export default LeftBar;