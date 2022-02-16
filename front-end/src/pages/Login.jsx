import React from "react";
import LoginForm from "../components/LoginForm";
import '../styles/login.css';

function Login() {
  return (
    <main className="loginContainer">
      <div className='sideText'>
        <h1 className="display-4 font-weight-normal">To do List Ebyrt</h1>
        <h4 className="text-muted">Faça login ou se cadastre para acessar.</h4>
      </div>
      <LoginForm />
    </main>
  );
}

export default Login;
