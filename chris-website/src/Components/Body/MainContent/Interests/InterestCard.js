import React from 'react';
import './InterestCard.css';
import Link from '../../../Utils/Link'
import frame from '../TopicSelector/dirks-gridframe.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InterestCard = ({imageURL, link,title, icon, alt, content, reverse = false}) => {
    
  if(!reverse){
    let mIcon = (icon==null)? null:<FontAwesomeIcon icon={[icon.prefix,icon.name]} size="xs"/>
    let mLink = (link.ref==null)? null:<a href={link.ref} className="w-50 h3 shadow-5 button tc">{mIcon}<span className="pl3">{link.content}</span></a>
    return (
      <div className="InterestCard flex justify-start white">
        <div className="InterestCard-container justify-center flex">
          <div className='InterestCard-row1 flex flex-column  items-center w-40 f3'>
            <img className="InterestCard-Img" src={imageURL}/>
            {mLink}
          </div>
          <div className='InterestCard-row2 flex flex-column w-40   pa1 relative'>
              <h1 className="InterestCard-row2-title sl f-headline lh-solid InterestCard-Title relative">{title}</h1>
              <p className="InterestCard-row2-content f3 relative mt6">{content}</p>
              <img className="InterestCard-row2-frame" src={frame}/>
          </div>
        </div>
      </div>
    );

  }else{
    let mIcon = (icon==null)? null:<FontAwesomeIcon icon={[icon.prefix,icon.name]} size="xs"/>
    let mLink = (link.ref==null)? null:<button className="w-50 h3 mt3 shadow-5">{mIcon}<span className="pl3">{link.content}</span></button>
    return (
      <div className="InterestCard flex justify-start white">
        <div className="InterestCard-container flex justify-center">
          <div className='InterestCard-row2 flex flex-column w-40 relative'>
              <h1 className="InterestCard-row2-title reverse sl f-headline lh-solid InterestCard-Title relative">{title}</h1>
              <p className="InterestCard-row2-content reverse f3 relative mt6">{content}</p>
              <img className="InterestCard-row2-frame" src={frame}/>
          </div>
          <div className='InterestCard-row1 flex flex-column items-center w-30 ma3 pa2 f3'>
            <img className="InterestCard-Img" src={imageURL}/>
            {mLink}
          </div>
        </div>
      </div>
    );
  }
}

export default InterestCard;