import React from 'react';
import ListToggle from './ListToggle';
import './TitleListItem.css';

const TitleListItem = (props) => (
      
        <div className="TitleListItem" style={{backgroundImage: 'url(' + props.backdrop + ')'}} >
          <div className="overlay">
            <div className="title">{props.title}</div>
            <div className="rating">{props.score} / 10</div>
            <div className="plot">{props.overview}</div>
            <ListToggle />
          </div>
        </div>
      );
    

export default TitleListItem;