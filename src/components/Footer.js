import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import '../CSS/footer.css';

const Footer = () => {
  return (
    <div className='content-wrap'>
      <div className='footer'>
        <span>
          <SocialMediaIconsReact
            borderColor='rgba(0,0,0,0.25)'
            icon='twitter'
            iconColor='rgba(255,255,255,1)'
            backgroundColor='rgba(105,105,105,0.25)'
            url='https://some-website.com/my-social-media-url'
            size='48'
          />
        </span>
        <span>
          <SocialMediaIconsReact
            borderColor='rgba(0,0,0,0.25)'
            icon='facebook'
            iconColor='rgba(255,255,255,1)'
            backgroundColor='rgba(105,105,105,0.25)'
            url='https://some-website.com/my-social-media-url'
            size='48'
          />
        </span>
        <span>
          <SocialMediaIconsReact
            borderColor='rgba(0,0,0,0.25)'
            icon='instagram'
            iconColor='rgba(255,255,255,1)'
            backgroundColor='rgba(105,105,105,0.25)'
            url='https://some-website.com/my-social-media-url'
            size='48'
          />
        </span>
        <span>
          {/* <Link to={'https://github.com/diamond-dogs-928'}> */}
          <SocialMediaIconsReact
            borderColor='rgba(0,0,0,0.25)'
            icon='github'
            iconColor='rgba(255,255,255,1)'
            backgroundColor='rgba(105,105,105,0.25)'
            url='https://github.com/diamond-dogs-928'
            size='48'
          />
          {/* </Link> */}
        </span>
        <span>
          <SocialMediaIconsReact
            borderColor='rgba(0,0,0,0.25)'
            icon='twitter'
            iconColor='rgba(255,255,255,1)'
            backgroundColor='rgba(105,105,105,0.25)'
            url='https://some-website.com/my-social-media-url'
            size='48'
          />
        </span>
      </div>
    </div>
  );
};

export default Footer;
