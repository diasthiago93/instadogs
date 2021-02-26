import React, { useState } from "react";

const UserPosts = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(props) {
    props.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => response.json)
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserPosts;
