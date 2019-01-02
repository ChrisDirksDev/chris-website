import React from 'react';
import './InterestCard.css';

const InterestCard = ({ImageURL, Content}) => {
    return (
      <div className="InterestCard flex">
          <p>
            <img src={ImageURL}/>
            {Content}
          </p>
      </div>
    );
}

export default InterestCard;