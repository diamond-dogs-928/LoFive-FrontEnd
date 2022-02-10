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
<<<<<<< HEAD
<<<<<<< HEAD
        <img
<<<<<<< HEAD
          className="topBarItems topBarLogo border"
          src="/images/Logo_Solo.jpg"
          alt="Logo"
        />
        <div className="border">
          <h3 className="border" id="topBarUsernameText">
            Christian410
          </h3>
        </div>
        <div id="topBarDateTextContainer" className="border">
          <h3 className="" id="topBarDateText">
            {day}
          </h3>
          <form className="SearchLoFive" action="">
            <input id="SearchBox" type="text" placeholder="Search LoFive" />
=======
          className='topBarItems topBarLogo border'
          // src='../../public/images/logo.png'
          src={logo}
          alt=''
        />
=======
        <img className='topBarItems topBarLogo border' src={logo} alt='' />
>>>>>>> a1269b8 (fixing lost changes - sidebar accordion, logo, deezer plugin)
        {/* <h3 className="brand col-3">LoFive</h3> */}
=======
        <img
          className='topBarItems topBarLogo border'
          src='/images/Logo_Solo.jpg'
          alt='Logo'
        />
>>>>>>> b14f74d (88% of top bar done. Added lines, Added font-family, Fixed Logo. Added back in index.html)
        <div className='border'>
          <h3 className='col-6 border' id='topBarUsernameText'>
            Christian410
          </h3>
        </div>
        <div id='topBarDateTextContainer' className='border'>
          <h3 className='col-3' id='topBarDateText'>
            {`today`}
          </h3>
          <form className='SearchLoFive' action=''>
            <input id='SearchBox' type='text' placeholder='Search LoFive' />
>>>>>>> 9a4c628 (updated icon to show, added accordian, partially styled text color)
          </form>
        </div>
      </div>
<<<<<<< HEAD
      <div id="lineHolders">
        <div id="lineOrange"></div>
        <div id="lineMaroon"></div>
=======
      <div id='lineHolders'>
        <div id='lineOrange'></div>
        <div id='lineMaroon'></div>
>>>>>>> b14f74d (88% of top bar done. Added lines, Added font-family, Fixed Logo. Added back in index.html)
      </div>
    </div>
  );
};

export default TopBar;
