import React from "react";
import './HeroButton.css';

const HeroButton = (props) => (
  <div>
    <a href="#" className="Button" data-primary={props.primary}>{props.text}</a>
  </div>
);

export default HeroButton;
    
  