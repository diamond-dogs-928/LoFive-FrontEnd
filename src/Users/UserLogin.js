import { Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import SignUp from './UserSignup';
import '../CSS/users.css';
import { Next } from 'react-bootstrap/esm/PageItem';

function UserLogin() {
  const navigate = useNavigate();
  const initialState = {
    username: '',
    password: '',
  };
  const [formState, setFormState] = useState(initialState);
  const [userToLogin, setUserToLogin] = useState();
  const [message, setMessage] = useState('');
  const [loginMsg, setLoginMsg] = useState;

  // post and existing to login
  const login = async () => {
    console.log('login is running');
    try {
      const options = {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          username: formState.username,
          password: formState.password,
        }),
        headers: { 'content-type': 'application/json' },
      };
      const url = 'http://localhost:4000/session/login';
      const loginResponse = await fetch(url, options);
      const loginJson = await loginResponse.json();
      console.log(loginJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log('handle submit is called');
    e.preventDefault();
    setFormState({ ...formState });
    login();
    setFormState(initialState);
  };

  return (
    <div className='UserLogin'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='control block-cube block-input'>
          <input
            name='username'
            type='text'
            id='username'
            placeholder='Username'
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
            name='password'
            type='password'
            id='password'
            placeholder='Password'
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

        {/* LOGIN BUTTON */}
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
          <div className='text'>Log In</div>
        </button>
        <div className='credits'></div>

        <div className='btn_2'>
          <button className='btn block-cube block-cube-hover' type='button'>
            <div className='bg-top'>
              <div className='bg-inner'></div>
            </div>
            <div className='bg-right'>
              <div className='bg-inner'></div>
            </div>
            <div className='bg'>
              <div className='bg-inner'></div>
            </div>
            <Link to='/signup'>
              <div className='text'>Register</div>
            </Link>
          </button>
          <div className='credits'></div>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
