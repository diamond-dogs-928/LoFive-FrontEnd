import React, { useContext, useState, createContext } from 'react';

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
  const [userName, setUserName] = useState('garrigoose');

  function toggleLogin() {
    setLoggedIn((loggedIn) => !loggedIn);
  }

  function setTheUsername(val) {
    setUserName(val);
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
