import React, { useState, createContext, useEffect } from "react";
import userActions from "../Helpers/userActions";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    _id: "",
  });
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const clearContext = () => {
    localStorage.clear();
    setUser({
      name: "",
      _id: "",
    });
    setToken("");
    setAuthenticated(false);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    setToken(token);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        authenticated,
        setAuthenticated,
        clearContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
