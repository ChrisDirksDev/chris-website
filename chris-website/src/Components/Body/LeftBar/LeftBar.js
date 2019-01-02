import React from 'react';
import './LeftBar.css';
import LeftBarItem from './LeftBarItem/LeftBarItem'

const LeftBar = ({active, activeLink, prev, links, onTopicClick}) => {

  let getGroup = (value) => {
    let Group = links.find( groups =>{
      return groups.value == value;
    })

    return (Group!=undefined)? Group:null;
  }
  

  let defaultPanelStyle = "LeftBar flex-col";


  let activeGroup = getGroup(active);
  let prevGroup = getGroup(prev);

  let show = (prevGroup != null && activeGroup.links.length > 0 && prevGroup.links.length > 0)? ' slowShow': ' fastShow';

  return(
    <div className ="LeftContainer border-gradient-right-down">
      { links.map( group =>{
        return (
          <div className={defaultPanelStyle+((group==activeGroup)? show:" hide")}>
            {group.links.map( link =>{
              if(link.id > 0){
                return(
                  <LeftBarItem title={link.title} active={(activeLink==link.id)? true:false} value={link.id} click={onTopicClick}/>
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