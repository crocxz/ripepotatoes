import React from 'react';
import './Hero.css';
import HeroButton from './HeroButton';
import NextButton from '../TitleLists/NextButton';

const Hero = () => (
        <div id="hero" className="Hero" style={{backgroundImage: 'url(http://digitalspyuk.cdnds.net/18/02/1024x512/landscape-1515674651-altered-carbon.jpg)'}}>
          <div className="content">
            <img className="logo" src="https://fanart.tv/fanart/tv/332331/hdtvlogo/altered-carbon-5a7292d6e75f2.png" alt="narcos background" />
            <h2>All episodes available now</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
            <div className="button-wrapper">
               <HeroButton primary={true} text="Watch now" />
               <HeroButton primary={false} text="+ My list" />
                <NextButton/>
            </div>
            
          </div>
          <div className="overlay"></div>
        </div>
      );


export default Hero