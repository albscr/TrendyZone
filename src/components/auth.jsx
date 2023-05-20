import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

  const login = ({ username }) => {
    setIsLoggedIn(true);
    setUser({ username });
    // Almacena el usuario en localStorage al iniciar sesión
    localStorage.setItem('user', JSON.stringify({ username }));
    
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    // Elimina el usuario de localStorage al cerrar sesión
    localStorage.removeItem('user');
  };

  const auth = { user, login, logout, isLoggedIn };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export { AuthProvider, useAuth };
