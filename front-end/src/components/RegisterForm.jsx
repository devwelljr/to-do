import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import "../styles/register.css";

function RegisterForm() {
  const { userReqs, setUser } = useContext(Context);
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [disabled, setDisable] = useState(false);
  const [hiddenInvalidEmail, setHiddenInvalidEmail] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  useEffect(() => {
    const { email, password, username } = registerForm;
    const passwordMinLength = 6;
    const userMinLength = 4;
    const Patt =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid =
      Patt.test(email) &&
      password.length >= passwordMinLength &&
      username.length >= userMinLength;
    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [registerForm]);

  const submitRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await userReqs.registerSubmit(registerForm);
      console.log(data)

      const { email, username } = data.newUser.user;
      const token = data.newUser.token;

      setUser({ email, username, token });
      setRegisterForm({ email: "", password: "", username: "" });
      navigate("/login");
    } catch (err) {
      const CONFLICT = 409;
      if (err.response.status === CONFLICT) setHiddenInvalidEmail(true);
    }
  };

  return (
    <div className='formRegisterConteiner'>
      <form className='formRegister' action='submit'>
        <h1 className='display-4 font-weight-normal'>Cadastro</h1>
        <input
          text='username'
          className='form-control'
          placeholder='Seu usuário'
          type='text'
          onChange={handleChange}
          value={registerForm.user}
          name='username'
        />
        <input
          text='email'
          placeholder='seu-email@site.com.br'
          type='email'
          onChange={handleChange}
          value={registerForm.email}
          name='email'
          className='form-control'
        />
        <input
          text='password'
          placeholder='********'
          type='password'
          onChange={handleChange}
          value={registerForm.password}
          name='password'
          className='form-control'
        />
        <button
          type='button'
          className='btn btn-outline-dark'
          disabled={disabled}
          onClick={(e) => submitRegister(e)}
        >
          Cadastrar
        </button>
      </form>

      {hiddenInvalidEmail && <span>Email já registrado!</span>}
    </div>
  );
}

export default RegisterForm;
