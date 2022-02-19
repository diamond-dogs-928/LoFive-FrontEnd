import React, { useContext, useState, createContext } from 'react';

const LoginContext = React.createContext();
const LoginUpdateContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function useLoginUpdate() {
  return useContext(LoginUpdateContext);
}

export const UserContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  function toggleLogin() {
    setLoggedIn((loggedIn) => !loggedIn);
  }

  return (
    <LoginContext.Provider value={loggedIn}>
      <LoginUpdateContext.Provider value={toggleLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
};

export default UserContext;
