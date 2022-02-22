import React, { useContext, useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = React.createContext();
const LoginUpdateContext = React.createContext();
const UsernameContext = React.createContext();
const UsernameUpdateContext = React.createContext();
const UrlContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext);
}
export function useLoginUpdate() {
  return useContext(LoginUpdateContext);
}
export function useUsername() {
  return useContext(UsernameContext);
}
export function useUsernameUpdate() {
  return useContext(UsernameUpdateContext);
}
export function useBackendUrl() {
  return useContext(UrlContext);
}

export const UserContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('LoFive');
  const [url, setUrl] = useState();
  //   const [backendUrl, setBackendUrl] = useState(
  //     'https://lo-five-backend.herokuapp.com/'
  //   );
  //   const [localUrl, setLocalUrl] = useState('http://localhost:4000/');
  const navigate = useNavigate();

  function toggleLogin(v) {
    navigate('/feed');
    setLoggedIn(v);
  }

  function setTheUsername(val) {
    setUserName(val);
    navigate('/feed');
  }

  useEffect(() => {
    const backendUrl =
      process.env.REACT_APP_ENV === 'production'
        ? 'https://lo-five-backend.herokuapp.com/'
        : 'http://localhost:4000/';
    setUrl(backendUrl);
  }, []);

  return (
    <LoginContext.Provider value={loggedIn}>
      <LoginUpdateContext.Provider value={toggleLogin}>
        <UsernameContext.Provider value={userName}>
          <UsernameUpdateContext.Provider value={setTheUsername}>
            <UrlContext.Provider value={url}>{children}</UrlContext.Provider>
          </UsernameUpdateContext.Provider>
        </UsernameContext.Provider>
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
};

export default UserContext;
