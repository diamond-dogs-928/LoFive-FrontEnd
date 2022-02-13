import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
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
    valid: null
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
        verifyPassword: formState.verifyPassword
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
    e.preventDefault();
    if (formState.password === formState.verifyPassword) {
      formState.valid = true;
      setMessage(`welcome ${formState.username}`);
      getUser()
    } else {
      formState.valid = false;
      setMessage(`passwords do not match`);
    }
    setFormState(initialState);
  };
  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          id='username'
          value={formState.username}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='email'
          id='email'
          value={formState.email}
          onChange={handleChange}
        />
        <label htmlFor='username'>Username</label>
        <input
          type='password'
          placeholder='Password'
          id='password'
          value={formState.password}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='Verify password'
          id='verifyPassword'
          value={formState.verifyPassword}
          onChange={handleChange}
        />
        <label htmlFor='confirmPassword'>Verify password</label>
        <Link to='/feed'>
          <button type='submit'>Sign Up</button>
        </Link> 
        <p>{message}</p>
      </form>
    </div>
  );
}
export default SignUp;