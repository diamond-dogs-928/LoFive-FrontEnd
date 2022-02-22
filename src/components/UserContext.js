import React, { useContext, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = React.createContext();
const LoginUpdateContext = React.createContext();
const UsernameContext = React.createContext();
const UsernameUpdateContext = React.createContext();

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

export const UserContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('LoFive');
  const navigate = useNavigate();

  function toggleLogin(v) {
    navigate('/feed');
    setLoggedIn(v);
  }

  function setTheUsername(val) {
    setUserName(val);
    navigate('/feed');
  }

  return (
    <LoginContext.Provider value={loggedIn}>
      <LoginUpdateContext.Provider value={toggleLogin}>
        <UsernameContext.Provider value={userName}>
          <UsernameUpdateContext.Provider value={setTheUsername}>
            {children}
          </UsernameUpdateContext.Provider>
        </UsernameContext.Provider>
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
};

export default UserContext;
