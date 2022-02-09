import { useState } from 'react';

const TopBar = () => {
  const [today, setToday] = useState();

  const setDay = () => {
    setToday('blueberry');
  };
  //   setDay();
  let day = "today's date";
  return (
    <div className='bg-dark container-fluid text-muted row'>
      <h3 className='brand col-3'>LoFive</h3>
      <h3 className='col-6'>Username</h3>
      <h3 className='col-3 '>{day}</h3>
    </div>
  );
};

export default TopBar;
