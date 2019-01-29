import React from 'react';
import './InterestCard.css';
import AButton from '../../../Utils/AButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InterestCard = ({imageURL, link,title, icon, alt, content, options = {}}) => {
  let {reverse, orientation} = options;
  
  let mIcon = (icon==null)? null:<FontAwesomeIcon icon={[icon.prefix,icon.name]} size="xs"/>
  let mLink = (link.ref==null)? null:<AButton text={link.content} mRef={link.ref} icon={icon} /> 
  

  let vert = (orientation == 'v')? 'verticle':'';
  let rev = (reverse)? 'reverse':'';
  let containerStyle= '';

  if ((vert+rev).length > 0) {
    containerStyle = "interestcard__container--"+ vert + rev;
  }

  return(
    <div className="interestcard flex white ph4">
      <div className={"interestcard__container justify-start flex " + containerStyle}>
        <div className='interestcard__group1 flex flex-column '>
          <img className="interestcard__group1__img ma2" src={imageURL}/>
          <h1 className={"interestcard__group2__title block--sl f-headline lh-solid relative " + ((reverse)? ' interestcard__group2__title--reverse':'')}>{title}</h1>
          <div className="f1">
            {mLink}
          </div>
        </div>
        <div className='interestcard__group2 flex flex-column pa4 relative'>
          <p className={"interestcard__group2__content f3 relative mt6 " + ((reverse)? ' interestcard__group2__content--reverse':'')}>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default InterestCard;