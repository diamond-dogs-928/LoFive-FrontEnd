import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from './UserSignup';
import '../CSS/users.css';

function UserLogin() {
  const initialState = useState({
    username: '',
    password: '',
  });
  const [userToLogin, setUserToLogin] = useState('');
  const [formState, setFormState] = useState(initialState);

  const login = () => {
    const options = {
      method: 'POST',
      username: { 'content-type': 'application/json' },
      body: JSON.stringify({ username: 'example route' }),
    };
    fetch('http://localhost:4000/session/login', options)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log(parsedData);
        setUserToLogin(parsedData);
      });
  };

  return (
    <div className="UserLogin">
      <form onSubmit={login} className='form'>
        <div class="control block-cube block-input">
          <input name="username" type="text" placeholder="Username" />
          <div class="bg-top">
            <div class="bg-inner"></div>
          </div>
          <div class="bg-right">
            <div class="bg-inner"></div>
          </div>
          <div class="bg">
            <div class="bg-inner"></div>
          </div>
        </div>

        {/* OLD USER BLOCK */}
        {/* <input type='text' placeholder='username'></input> */}

        <div class="control block-cube block-input">
          <input name="password" type="password" placeholder="Password" />
          <div class="bg-top">
            <div class="bg-inner"></div>
          </div>
          <div class="bg-right">
            <div class="bg-inner"></div>
          </div>
          <div class="bg">
            <div class="bg-inner"></div>
          </div>
        </div>

        {/* OLD password BLOCK */}
        {/* <input type="password" placeholder="password"></input> */}
        <Link to="/feed">
          <button class="btn block-cube block-cube-hover" type="button">
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
            <div class="text">Log In</div>
          </button>
          <div class="credits"></div>
          {/* <button type="submit">login</button> */}
        </Link>
      

      <Link to="/signup">
        <div class="btn_2">
          <button class="btn block-cube block-cube-hover" type="button">
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
            <div class="text">Register</div>
          </button>
          <div class="credits"></div>
        </div>
      </Link>
      </form>
    </div>
  );
}

export default UserLogin;
