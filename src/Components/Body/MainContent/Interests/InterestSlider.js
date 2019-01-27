import React from 'react';
import './InterestSlider.css';
import Card from './InterestCard';
import Bird from './dirksframe-bird.png'
const InterestSlider = () => {
    return (
      <div className="InterestSlider flex flex-content">
        <Card ImageURL={Bird} Content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore numquam consectetur, in maxime deleniti fugit exercitationem sequi omnis magni doloribus! At molestiae, consequuntur dolores iste quibusdam harum sint repellat?"/>
      </div>
    );
}

export default InterestSlider;