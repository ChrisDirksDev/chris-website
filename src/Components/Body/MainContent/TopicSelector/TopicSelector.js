import React, {Component} from 'react';
import './TopicSelector.css';
import TopicItem from './TopicItem';

const TopicSelector = ({Topics, click}) => {
  return (
    <div className="TopicSelector w-100 flex flex-column  ">
      <div className='row flex justify-center items-center'>
        <span className="topicselector-headline f1 lh-title fw8 mv5 white ">{Topics.Headline}</span>
      </div>
      <div className='TopicSelector-Container row flex justify-center flex-wrap'>
        {
          Topics.Images.map( (item,index) =>{
            let mod = "";
            if (index > 0 ) {
              mod = "ml3"
            }
              return(
                <TopicItem classMod={mod} img={Topics.Images[index]} content={Topics.Content[index]} hoverContent={Topics.HoverContent[index]} value={Topics.Values[index]} click={click} clickValue={index}/>
              )
          })
        }
      </div>
  </div>
  );
    
  

}

export default TopicSelector;