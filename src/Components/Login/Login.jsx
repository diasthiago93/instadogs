import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import LoginCreate from "./LoginCreate";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="criar">
            <LoginCreate />
          </Route>
          <Route path="recuperar">
            <LoginPasswordLost />
          </Route>
          <Route path="resetar">
            <LoginPasswordReset />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
