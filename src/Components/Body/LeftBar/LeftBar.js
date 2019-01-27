import React from 'react';
import './LeftBar.css';
import LeftBarItem from './LeftBarItem/LeftBarItem'

const LeftBar = ({activeCategory, activeTopic, topicData, prevCategory, onTopicClick}) => {

  let defaultPanelStyle = "LeftBar flex flex-column fw4 pt3";

  let show = (prevCategory != null && activeCategory.links.length > 0 && 
    prevCategory.links.length > 0)? ' slowShow': ' fastShow';

  return(
    <div className ="LeftContainer border-gradient-right-down">
      { topicData.map( category =>{
        return (
          <div className={defaultPanelStyle+((category==activeCategory)? show:" hide")}>
            {category.links.map( link =>{
              if(link.id > 0){
                return(
                  <LeftBarItem title={link.title} icon={link.icon} active={(activeTopic==link.value)? true:false} 
                  value={link.value} click={onTopicClick}/>
                )
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
export default LeftBar;