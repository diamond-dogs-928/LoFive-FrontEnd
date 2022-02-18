import '../CSS/navigation.css';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const logOut = () => {
    console.log('login is running');
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: null,
    };
    fetch('http://localhost:4000/session/logout', options);
    console
      .log('logout is happening')
      .then((data) => data.json())
      .then(() => {
        console.log('logged out');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div className='LiAndBar'>
      <ul className='NavBarUl'>
        <Link to='/feed'>
          <li className='NavBarLi'>Feed</li>
        </Link>
        <Link to='/feed'>
          <li className='NavBarLi'>Profile</li>
        </Link>
        <Link to='/feed'>
          <li className='NavBarLi'>Friends</li>
        </Link>
        <Link to='/feed'>
          <li className='NavBarLi'>Messages</li>
        </Link>
        <Link to={isActive ? '/link-to-route' : '#'}>
          <li className='NavBarLi effect-underline' onClick={handleSubmit}>
            {' '}
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
