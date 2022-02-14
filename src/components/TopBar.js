import { useState } from 'react';
import '../CSS/topBar.css';

import logo from '../images/logo.png';

const TopBar = () => {
  const [today, setToday] = useState();

  const setDay = () => {
    setToday('blueberry');
  };
  // setDay();
  let day = "Today's Date";
  return (
    <div className='topBarContainer border'>
      <div className='topbarItems border' id='topBarText'>
        <img
          className='topBarItems topBarLogo border'
          src='/images/Logo_Solo.jpg'
          alt='Logo'
        />
        <div className='border'>
          <h3 className='border' id='topBarUsernameText'>
            Christian410
          </h3>
        </div>
        <div id='topBarDateTextContainer' className='border'>
          <h3 className='' id='topBarDateText'>
            {day}
          </h3>
          <form className='SearchLoFive' action=''>
            <input id='SearchBox' type='text' placeholder='Search LoFive' />
          </form>
        </div>
      </div>
      <div id='lineHolders'>
        <div id='lineOrange'><a href="https://open.spotify.com/" alt="Link to Spotify" target="_blank" rel='noreferrer'><span className='link'></span></a></div>

        <div id='lineMaroon'><a href="https://www.apple.com/apple-music/" alt="Link to apple Music" target="_blank" rel='noreferrer'> <span className='link'></span></a></div>
        
      </div>
    </div>
  );
};

export default TopBar;
