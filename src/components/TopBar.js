import { useState } from "react";
import "../CSS/topBar.css";

const TopBar = () => {
  const [today, setToday] = useState();

  const setDay = () => {
    setToday("blueberry");
  };
  //   setDay();
  let day = "Today's Date";
  return (
    <div className="topBarContainer border">
      <div className="topbarItems border" id="topBarText">
        <img
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
          </form>
        </div>
      </div>
      <div id="lineHolders">
        <div id="lineOrange"></div>
        <div id="lineMaroon"></div>
      </div>
    </div>
  );
};

export default TopBar;
