import React, { useEffect } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/users.css';
import {
  useLogin,
  useLoginUpdate,
  useUsername,
  useUsernameUpdate,
} from '../components/UserContext';

function SignUp() {
  const navigate = useNavigate();
  const [passMatch, setPassMatch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToLogin, setUserToLogin] = useState('');
  const initialState = {
    email: '',
    username: '',
    password: '',
    verifyPassword: '',
  };

  //
  const [formState, setFormState] = useState(initialState);
  const [message, setMessage] = useState('');

  // context
  const loginStatus = useLogin();
  const updateLoginStatus = useLoginUpdate();
  const usernameStatus = useUsername();
  const updateUsernameStatus = useUsernameUpdate();

  // post a new user
  let getUser = async () => {
    console.log('getUser Running Now');
    try {
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: formState.email,
          username: formState.username,
          password: formState.password,
          verifyPassword: formState.verifyPassword,
        }),
      };
      const url = 'http://localhost:4000/session/register';
      const registerReponse = await fetch(url, options);
      const registerJson = await registerReponse.json();
      console.log(registerJson);
      setUserToLogin(registerJson.user);
      console.log(registerJson.user);
      setMessage(`Welcome to LoFive ${userToLogin.username}`);
      (await registerJson.loggedIn)
        ? setIsLoggedIn(true)
        : setIsLoggedIn(false);
      // parsedData.loggedIn
      //   ? setUserToLogin(parsedData.user.username)
      //   : setUserToLogin('');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(loginStatus);

  // handlchange
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.password === formState.verifyPassword) {
      setFormState({ ...formState });
      setPassMatch(true);
      setMessage(`welcome ${formState.username}`);
      console.log(message);
      getUser();
      isLoggedIn ? updateLoginStatus(true) : updateLoginStatus(false);
      isLoggedIn
        ? updateUsernameStatus(usernameStatus)
        : console.log('something went wrong');
      console.log(usernameStatus);
      loginStatus ? navigate('/feed') : console.log('not happening');
    } else {
      setPassMatch(false);
      setMessage(`passwords do not match`);
      console.log(message);
    }
    setFormState(initialState);
  };

  //
  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='control block-cube block-input'>
          <input
            type='text'
            placeholder='Username'
            id='username'
            value={formState.username}
            onChange={handleChange}
          />
          <div className='bg-top'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg'>
            <div className='bg-inner'></div>
          </div>
        </div>

        <div className='control block-cube block-input'>
          <input
            type='text'
            placeholder='Email'
            name='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
          />
          <div className='bg-top'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg'>
            <div className='bg-inner'></div>
          </div>
        </div>

        <div className='control block-cube block-input'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
          />
          <div className='bg-top'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg'>
            <div className='bg-inner'></div>
          </div>
        </div>

        <div className='control block-cube block-input'>
          <input
            type='password'
            placeholder='Verify password'
            name='verifyPassword'
            id='verifyPassword'
            value={formState.verifyPassword}
            onChange={handleChange}
          />
          <div className='bg-top'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg'>
            <div className='bg-inner'></div>
          </div>
        </div>

        <label htmlFor='confirmPassword'></label>

        {formState.password === formState.verifyPassword ? (
          // <Link to='/feed'>
          <div className='btn_2'>
            <button
              className='btn block-cube block-cube-hover'
              type='button'
              onClick={handleSubmit}
            >
              <div className='bg-top'>
                <div className='bg-inner'></div>
              </div>
              <div className='bg-right'>
                <div className='bg-inner'></div>
              </div>
              <div className='bg'>
                <div className='bg-inner'></div>
              </div>
              <div className='text'>Register</div>
            </button>
            <div className='credits'></div>
          </div>
        ) : (
          // </Link>
          // <Link to='/login'>
          <div className='btn_2'>
            <button
              className='btn block-cube block-cube-hover'
              type='button'
              onClick={() => {
                loginStatus ? navigate('/feed') : console.log('not happening');
              }}
            >
              <div className='bg-top'>
                <div className='bg-inner'></div>
              </div>
              <div className='bg-right'>
                <div className='bg-inner'></div>
              </div>
              <div className='bg'>
                <div className='bg-inner'></div>
              </div>
              <div className='text'>passwords must match</div>
            </button>
            <div className='credits'></div>
          </div>
          // </Link>
        )}
        <p style={{ color: 'white' }}>{message}</p>
      </form>
    </div>
  );
}
export default SignUp;
