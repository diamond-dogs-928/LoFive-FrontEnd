import '../CSS/navigation.css';
import { Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import {
  useLogin,
  useLoginUpdate,
  useUsername,
  useUsernameUpdate,
} from './UserContext';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // context
  const loginStatus = useLogin();
  const updateLoginStatus = useLoginUpdate();
  const currentUsername = useUsername();
  const updateCurrentUsername = useUsernameUpdate();

  // get to logout
  const logOut = async () => {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      // body: null,
    };
    const url = 'http://localhost:4000/session/logout';
    // try {
    fetch(url, options)
      .then((data) => data.json())
      .then((logoutJson) => {
        console.log(logoutJson);
        updateLoginStatus(false);
        console.log('login status:  ' + loginStatus);
      });
    // const logoutResponse = await fetch(url, options);
    // console.log((await 'logout response: >>>') + logoutResponse);
    // console.log('login status: >> ' + loginStatus);
    // const logoutJson = await logoutResponse.json();
    // console.log(logoutJson);
    // // setIsLoggedIn(!logoutJson.loggedOut);
    // // console.log('isLoggedIn: ?');
    // // updateLoginStatus(false);
    // } catch (err) {
    // console.log(err);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    logOut();
    (await isLoggedIn) ? navigate('/') : navigate('/');
    console.log(await loginStatus);
    updateCurrentUsername('LoFive');
  };

  return (
    <div className='LiAndBar'>
      <ul className='NavBarUl'>
      <Link to="/feed">
        <li className='NavBarLi effect-underline'>{currentUsername}</li>
      </Link>
        {/* <li>{loginStatus ? 'logged in: true' : 'logged in false'}</li>
        <li>
          <button onClick={updateLoginStatus}>Update</button>
        </li> */}
        {!loginStatus ? (
          <Link to='/'>
            <li className='NavBarLi'>Login</li>
          </Link>
        ) : (
          ' '
        )}
        {loginStatus ? (
          <Link to='/feed'>
            <li className='NavBarLi'>Feed</li>
          </Link>
        ) : (
          ''
        )}

        {loginStatus ? (
          <Link to='/profile'>
            <li className='NavBarLi'>Profile</li>
          </Link>
        ) : (
          ''
        )}
        {loginStatus ? (
          <Link to='/feed'>
            <li className='NavBarLi'>Friends</li>
          </Link>
        ) : (
          ''
        )}
        {loginStatus ? (
          <Link to='/feed'>
            <li className='NavBarLi'>Messages</li>
          </Link>
        ) : (
          ''
        )}
        {loginStatus ? (
          <Link to={'#'}>
            <li className='NavBarLi effect-underline' onClick={handleSubmit}>
              {' '}
              Logout
            </li>
          </Link>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default Navigation;
