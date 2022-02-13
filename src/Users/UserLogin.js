import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from './UserSignup';

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
    <div className='UserLogin'>
      <form onSubmit={login}>
        <input type='text' placeholder='username'></input>
        <input type='password' placeholder='password'></input>
        <Link to='/feed'>
          <button type='submit'>login</button>
        </Link>
      </form>
      <Link to='/signup'>
        <button>Not Registered? Become a Member!</button>
      </Link>
    </div>
  );
}

export default UserLogin;
