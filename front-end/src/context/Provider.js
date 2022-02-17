import React, { useState } from "react";
import axios from "axios";
import { node } from "prop-types";
import Context from "./Context";

/* Endpoints das requisições pro backend */
const endpoints = {
  user: {
    register: "http://localhost:3001/users/register",
    login: "http://localhost:3001/users/login",
  },
  task: {
    create: "http://localhost:3001/tasks",
    getAll: "http://localhost:3001/tasks/mytasks",
    update: "http://localhost:3001/tasks/update/",
    delete: "http://localhost:3001/tasks/delete/",
  },
};

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  /* Objeto com todas as requisições de usuário */
  const userReqs = {
    loginSubmit: (loginForm) => axios.post(endpoints.user.login, loginForm),

    registerSubmit: (registerForm) =>
      axios.post(endpoints.user.register, registerForm),
  };

  /* Objeto com todas as requisições de tasks */
  const taskReqs = {
    createSubmit: (task) =>
      axios.post(
        endpoints.task.create,
        task,
        {
          headers: { Authorization: user.token },
        },
      ),

    getAllTasks: () =>
      axios.get(endpoints.task.getAll, {
        headers: { Authorization: user.token },
      }),

    updateSubmit: (id, newDescription) =>
      axios.put(
        `${endpoints.task.update}${id}`,
        newDescription,
        {
          headers: { Authorization: user.token },
        }
      ),

    deleteSubmit: (id) =>
      axios.delete(`${endpoints.task.delete}${id}`, {
        headers: { Authorization: user.token },
      }),
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        tasks,
        setTasks,
        userReqs,
        taskReqs,
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
