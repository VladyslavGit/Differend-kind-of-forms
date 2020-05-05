import React, { Component } from "react";
import styles from "./TextArea.module.css";

export class TextArea extends Component {
  state = {
    value: "Please write an essay about your favorite pattern",
  };

  handleChange = (evt) => {
    this.setState({ value: evt.target.value });
  };

  handleSubmit = (evt) => {
    alert("An essay was submitted: " + this.state.value);
    evt.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor="Essay" className={styles.label}>
          Create your Essay:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            className={styles.textArea}
            required
          />
        </label>
        <button type="submit" className={styles.textAreaBtn}>
          Send
        </button>
      </form>
    );
  }
}
