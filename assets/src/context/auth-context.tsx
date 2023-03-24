import React, { useState, useContext, createContext, useEffect } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  userHasAuthenticated: () => void;
  userHasSignOut: () => void;
}

const initialState: IAuthContext = {
  isAuthenticated: false,
  userHasAuthenticated: () => ({}),
  userHasSignOut: () => ({}),
};

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider: React.FC<any> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    console.log('isAuthenticated changed', isAuthenticated);
  }, [isAuthenticated]);

  async function userHasAuthenticated() {
    console.log('userHasAuthenticated');
    setIsAuthenticated(true);
  }

  async function userHasSignOut() {
    setIsAuthenticated(false);
  }

  const value: IAuthContext = {
    isAuthenticated,
    userHasAuthenticated,
    userHasSignOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
