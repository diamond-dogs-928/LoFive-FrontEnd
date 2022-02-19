import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import ReactDOM from 'react-dom';
import '../App.css';

const Footer = () => {
  return (
    <div className='footer'>
      <span>
        <SocialMediaIconsReact
          borderColor='rgba(0,0,0,0.25)'
          icon='twitter'
          iconColor='rgba(255,255,255,1)'
          backgroundColor='rgba(26,166,233,1)'
          url='https://some-website.com/my-social-media-url'
          size='48'
        />
      </span>
    </div>
  );
};

export default Footer;
