<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useState } from 'react';
 


function SignUp () {
  const initialState = { username: '', password: '', confirmPassword: '', valid: ''}
  const [formState, setFormState] = useState(initialState)
  const [message, setMessage] = useState('')
    
  
  
    let getUser = () => {
      const requestData = {
        method: 'POST',
        username: {'content-type': 'application/json'},
        body: JSON.stringify({username: 'example route'})
      }

      fetch('http://localhost:4000/register', requestData)
      .then(data => data.json())   
      .then(parsedData => {
        console.log(parsedData);
        setFormState(parsedData)
      })
    }
    useEffect(()=>{
      getUser()
    }, [])


  
=======
// import React, { useEffect } from 'react';
import { useState, useEffect } from 'react';
=======
import React, { useEffect } from 'react';
import { useState } from 'react';
>>>>>>> a927bc9 (signup update)

function SignUp() {
  const initialState = {
    username: '',
    password: '',
    confirmPassword: '',
    valid: '',
  };
  const [formState, setFormState] = useState(initialState);
  const [message, setMessage] = useState('');

function SignUp () {
  const initialState = { username: '', password: '', confirmPassword: '', valid: ''}
  const [formState, setFormState] = useState(initialState)
  const [message, setMessage] = useState('')
    
  
  
    let getUser = () => {
      const requestData = {
        method: 'POST',
        username: {'content-type': 'application/json'},
        body: JSON.stringify({username: 'example route'})
      }

<<<<<<< HEAD
    fetch('http://localhost:3000/budget/');
  });
>>>>>>> bd11e13 (front end signup)
=======
    fetch('http://localhost:4000/register', requestData)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log(parsedData);
        setFormState(parsedData);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
>>>>>>> a927bc9 (signup update)

  const handleChange = (e) => {
    setFormState({
      ...formState,
<<<<<<< HEAD
      [e.target.id]:e.target.value
  })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(formState.password === formState.confirmPassword 
      
      ) {
      formState.valid = true 
      setMessage(`welcome ${formState.username}`)
    } else {
      formState.valid = false
      setMessage(`passwords do not match`)
    }
    setFormState(initialState)
  }
  
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={ handleSubmit}>
          <input type="text" placeholder="Username" id="username" 
          value= {formState.username}
          onChange = {handleChange}
          />
          <label htmlFor="username">Username</label>

          <input type="password" placeholder="Password" id="password" 
           value = {formState.password} 
           onChange={handleChange}
          />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="confirmPassword"
            value= {formState.confirmPassword}
            onChange={handleChange}
          />
          <label htmlFor="confirmPassword">Confirm password</label>

          <button type="submit">Sign Up</button>
          <p>{message}</p>
        </form>
      </div>
    );
=======
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.password === formState.confirmPassword) {
      formState.valid = true;
      setMessage(`welcome ${formState.username}`);
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
          placeholder='Confirm password'
          id='confirmPassword'
          value={formState.confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor='confirmPassword'>Confirm password</label>

        <button type='submit'>Sign Up</button>
        <p>{message}</p>
      </form>
    </div>
  );
>>>>>>> bd11e13 (front end signup)
}

export default SignUp;
