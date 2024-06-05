import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";

export const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      if (response.data.token) {
        onLoginSuccess();
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <section className={styles.login}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form className={styles.form} onSubmit={handleLogin}>
        <h3>Login Here</h3>

        {error && <p className={styles.error}>{error}</p>}

        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
    </section>
  );
};
