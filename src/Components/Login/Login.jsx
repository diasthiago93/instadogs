import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import LoginCreate from "./LoginCreate";

const Login = () => {
  return (
    <div>
      <Switch>
        <Route path="/login/criar">
          <LoginCreate />
        </Route>
        <Route path="/login/recuperar">
          <LoginPasswordLost />
        </Route>
        <Route path="/login/resetar">
          <LoginPasswordReset />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
};

export default Login;
