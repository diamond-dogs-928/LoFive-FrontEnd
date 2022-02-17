import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import '../CSS/users.css';
// function SignUp() {
//   const initialState = {
//     username: '',
//     password: '',
//     confirmPassword: '',
//     valid: '',
//   };
//   const [formState, setFormState] = useState(initialState);
//   const [message, setMessage] = useState('');
function SignUp() {
  const initialState = {
    email: '',
    username: '',
    password: '',
    verifyPassword: '',
    valid: null,
  };
  const [formState, setFormState] = useState(initialState);
  const [message, setMessage] = useState('');
  let getUser = () => {
    const requestData = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
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
        // console.log(err);
      });
  };
  // useEffect(() => {
  //   getUser();
  // }, []);
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (formState.password === formState.verifyPassword) {
      formState.valid = true;
      setMessage(`welcome ${formState.username}`);
      console.log(message);
      getUser();
    } else {
      formState.valid = false;
      setMessage(`passwords do not match`);
      console.log(message);
    }
    setFormState(initialState);
  };
  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div class='control block-cube block-input'>
          <input
            type='text'
            placeholder='Username'
            id='username'
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

        <div class='control block-cube block-input'>
          <input
            type='text'
            placeholder='Email'
            id='email'
            value={formState.email}
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

        {/* Should this htmlFor label be for username? I think it is meant to be password */}
        <label htmlFor='username'></label>

        <label htmlFor='password'></label>

        <div class='control block-cube block-input'>
          <input
            type='password'
            placeholder='Password'
            id='password'
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

        <div class='control block-cube block-input'>
          <input
            type='password'
            placeholder='Verify password'
            id='verifyPassword'
            value={formState.verifyPassword}
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

        <label htmlFor='confirmPassword'></label>

        {formState.password === formState.verifyPassword ? (
          <Link to='/feed'>
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
                <div class='text'>Register</div>
              </button>
              <div class='credits'></div>
            </div>
          </Link>
        ) : (
          // <Link to='/login'>
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
              <div class='text'>passwords must match</div>
            </button>
            <div class='credits'></div>
          </div>
          // </Link>
        )}
        <p style={{ color: 'white' }}>{message}</p>
      </form>
    </div>
  );
}
export default SignUp;
