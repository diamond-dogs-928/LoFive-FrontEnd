import React, { useEffect } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/users.css';

function SignUp() {
  const navigate = useNavigate();
  const [passMatch, setPassMatch] = useState(false);
  const initialState = {
    email: '',
    username: '',
    password: '',
    verifyPassword: '',
  };

  //
  const [formState, setFormState] = useState(initialState);
  const [message, setMessage] = useState('');

  // post a new user
  let getUser = () => {
    console.log('getUser Running Now');
    const requestData = {
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
    fetch('http://localhost:4000/session/register', requestData)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log(parsedData);
        setFormState(parsedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   getUser();
  // }, []);

  //
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  //
  const handleSubmit = (e) => {
    console.log('handle submit is called here');
    e.preventDefault();
    if (formState.password === formState.verifyPassword) {
      setFormState({ ...formState });
      setPassMatch(true);
      setMessage(`welcome ${formState.username}`);
      console.log(message);
      getUser();
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
              // onClick={handleSubmit}
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
