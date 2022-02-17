import { Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import SignUp from './UserSignup';
import '../CSS/users.css';

function UserLogin() {
  const navigate = useNavigate();
  const initialState = useState({
    username: '',
    password: '',
  });
  const [formState, setFormState] = useState(initialState);
  const [userToLogin, setUserToLogin] = useState();

  // post and existing to login
  const login = () => {
    console.log('login clicked');
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: formState.username,
        password: formState.password,
      }),
    };
    fetch('http://localhost:4000/session/login', options)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log(parsedData);
        setUserToLogin(parsedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    login();
  };

  return (
    <div className='UserLogin'>
      <form onSubmit={login} className='form'>
        <div class='control block-cube block-input'>
          <input
            name='username'
            type='text'
            placeholder='Username'
            value={formState.username}
            onChange={handleChange}
          />
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
        </div>

        {/* OLD USER BLOCK */}
        {/* <input type='text' placeholder='username'></input> */}

        <div class='control block-cube block-input'>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={formState.password}
            onChange={handleChange}
          />
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <button
          class='btn block-cube block-cube-hover'
          type='button'
          onClick={login}
        >
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
          <div class='text'>Log In</div>
        </button>
        <div class='credits'></div>

        <div class='btn_2'>
          <button class='btn block-cube block-cube-hover' type='button'>
            <div class='bg-top'>
              <div class='bg-inner'></div>
            </div>
            <div class='bg-right'>
              <div class='bg-inner'></div>
            </div>
            <div class='bg'>
              <div class='bg-inner'></div>
            </div>
            <Link to='/signup'>
              <div class='text'>Register</div>
            </Link>
          </button>
          <div class='credits'></div>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
