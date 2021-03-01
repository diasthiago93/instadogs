import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm("email");
  const password = useForm();

  function handleSubimit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.JSON;
      })
      .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubimit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Password" type="password" {...password} name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
