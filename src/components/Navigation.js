import '../CSS/navigation.css';
import { Route, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useLogin, useLoginUpdate, useUsername } from './UserContext';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const loginStatus = useLogin();
  const updateLoginStatus = useLoginUpdate();
  const currentUsername = useUsername();

  const logOut = async () => {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: null,
    };
    await fetch('http://localhost:4000/session/logout', options)
      .then((data) => data.json())
      .then((returnData) => {
        console.log(returnData);
        returnData.loggedOut
          ? updateLoginStatus(false)
          : updateLoginStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logOut();
  };

  // setLoginContext('purple');

  return (
    <div className='LiAndBar'>
      <ul className='NavBarUl'>
        <li>{currentUsername}</li>
        <li>{loginStatus ? 'logged in: true' : 'logged in false'}</li>
        <li>
          <button onClick={updateLoginStatus}>Update</button>
        </li>
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
