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

  // get to logoust
  const logOut = async () => {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: null,
    };
    const url = 'http://localhost:4000/session/logout';
    const logoutResponse = await fetch(url, options);
    const logoutJson = await logoutResponse.json();
    await setIsLoggedIn(!logoutResponse.loggedOut);
    console.log('isLoggedIn: ' + isLoggedIn);
    await updateLoginStatus(isLoggedIn);
    // console
    //   .log(isLoggedIn)
    //   .then((data) => data.json())
    //   .then((returnData) => {
    //     console.log(returnData);
    //     returnData.loggedOut
    //       ? updateLoginStatus(false)
    //       : updateLoginStatus(true);
    //   })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    logOut();
    (await loginStatus) ? navigate('/') : navigate('/');
  };

  // setLoginContext('purple');

  return (
    <div className='LiAndBar'>
      <ul className='NavBarUl'>
        <li>{currentUsername}</li>
        {/* <li>{loginStatus ? 'logged in: true' : 'logged in false'}</li>
        <li>
          <button onClick={updateLoginStatus}>Update</button>
        </li> */}
        {!loginStatus ? (
          <Link to='/'>
            <li className='NavBarLi'>Login</li>
          </Link>
        ) : (
          console.log('you must log in. login status: ' + loginStatus)
        )}
        {loginStatus ? (
          <Link to='/feed'>
            <li className='NavBarLi'>Feed</li>
          </Link>
        ) : (
          ''
        )}

        {loginStatus ? (
          <Link to='/feed'>
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
