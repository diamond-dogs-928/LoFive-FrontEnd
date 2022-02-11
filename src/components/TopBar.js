import { useState } from 'react';
import '../CSS/topBar.css';

import logo from '../images/logo.png';

const TopBar = () => {
  const [today, setToday] = useState();

  const setDay = () => {
    setToday('blueberry');
  };
  //   setDay();
  let day = "Today's Date";
  return (
    <div className='topBarContainer border'>
      <div className='topbarItems border' id='topBarText'>
        <img className='topBarItems topBarLogo border' src={logo} alt='' />
        {/* <h3 className="brand col-3">LoFive</h3> */}
        <div className='border'>
          <h3 className='col-6 border' id='topBarUsernameText'>
            Username
          </h3>
        </div>
        <div id='topBarDateTextContainer' className='border'>
          <h3 className='col-3' id='topBarDateText'>
            {day}
          </h3>
          <form className='SearchLoFive' action=''>
            <input id='SearchBox' type='text' placeholder='Search LoFive' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
