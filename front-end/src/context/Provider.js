import React, { useState } from "react";
import axios from "axios";
import { node } from "prop-types";
import Context from "./Context";

/* Endpoints das requisições pro backend */
const endpoints = {
  user: {
    register: "http://localhost:3001/users/register",
    login: "http://localhost:3001/users/login",
  }
};

function Provider({ children }) {
  const [user, setUser] = useState({});

  /* Objeto com todas as requisições de usuário */
  const userReqs = {
    loginSubmit: (loginForm) => axios.post(endpoints.user.login, loginForm),

    registerSubmit: (registerForm) =>
      axios.post(endpoints.user.register, registerForm),
  };

  /* Objeto com todas as requisições de produtos */

  return (
    <Context.Provider
      value={{
        endpoints,
        user,
        setUser,
        userReqs,
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
