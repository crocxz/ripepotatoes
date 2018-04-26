// SearchButton.js
import React from "react";
import { Link } from 'react-router-dom';
import './NextButton.css';

const NextButton = () => (
    <div className="next-button"> 
    <Link to={`/search/`}>
     Next
    </Link>
    </div>
  )


export default NextButton;