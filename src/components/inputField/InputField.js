import React, { Component } from "react";
import shortid from "shortid";
import styles from "./InputField.module.css";

export class InputField extends Component {
  state = {
    searchQuery: "",
    language: "JavaScript",
  };

  inputId = shortid.generate();

  handleImputChange = (evt) => {
    this.setState({ searchQuery: evt.target.value });
  };

  find = (evt) => {
    if (evt.keyCode === 13 && this.state.searchQuery) {
      alert(`Show results for ${this.state.searchQuery}`);
      evt.preventDefault();
    } else if (evt.keyCode === 13 && !this.state.searchQuery) {
      alert(`Please fill out this field`);
      evt.preventDefault();
    }
  };

  onChangeSelect = (evt) => {
    this.setState({ language: evt.target.value });
  };

  handleSelectSubmit = (evt) => {
    alert(`You chose:  ${this.state.language}`);
    evt.preventDefault();
  };

  render() {
    const { searchQuery } = this.state;
    console.log("searchQuery", this.state.searchQuery);
    console.log("language", this.state.language);
    return (
      <>
        <form className={styles.form}>
          <label htmlFor={this.inputId}>
            {/* Find your movie */}
            <input
              className={styles.input}
              type="text"
              name="searchQuery"
              value={searchQuery}
              onChange={this.handleImputChange}
              id={this.inputId}
              placeholder="Enter your request"
              autoComplete="off"
              onKeyDown={this.find}
            />
          </label>
        </form>
        <h2 className={styles.title}>Forms. The select Tag</h2>
        <form
          className={styles.formForSelect}
          onSubmit={this.handleSelectSubmit}
        >
          <label htmlFor="language" className={styles.select}>
            Select a programming language:
            <select
              className={styles.selectList}
              value={this.state.language}
              onChange={this.onChangeSelect}
            >
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Scala">Scala</option>
            </select>
          </label>
          <button type="submit" className={styles.btnForSelect}></button>
        </form>
      </>
    );
  }
}
