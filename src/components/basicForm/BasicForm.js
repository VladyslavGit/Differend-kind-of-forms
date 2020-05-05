import React, { Component } from "react";
import shortid from "shortid";
import styles from "./BasicForm.module.css";

export class BasicForm extends Component {
  state = {
    login: "",
    password: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit(event) {
    alert(`You have successfully registered and logged in.`);
    event.preventDefault();
  }

  loginInputId = shortid.generate();

  render() {
    const { login, password } = this.state;
    console.log("login--------->", login);
    console.log("password-------->", password);
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <label htmlFor={this.loginInputId}>
          {/* Login */}
          <input
            maxLength="25"
            name="login"
            className={styles.textField}
            placeholder="Login"
            autoComplete="username"
            id={this.loginInputId}
            value={login}
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor="">
          {/* Password */}
          <input
            type="password"
            maxLength="25"
            name="password"
            className={styles.passField}
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={styles.btnForEntry} type="submit" value="Войти">
          Sign In
        </button>
      </form>
    );
  }
}
