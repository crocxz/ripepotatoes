// SearchButton.js
import React from "react";
import { Link } from 'react-router-dom';
import './NextButton.css';

const NextButton = () => (
    <div>
    <Link to={`/search/`}>
    <div className="next-button"> 
     Advanced Search
     </div>
    </Link>
    </div>
  )


export default NextButton;