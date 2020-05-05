import React from "react";
import styles from "./App.module.css";
import { BasicForm } from "./basicForm/BasicForm";
import { InputField } from "./inputField/InputField";
import { TextArea } from "./textArea/TextArea";

function App() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Forms. Computed Property Names</h2>
      <BasicForm />
      <h2 className={styles.title}>Forms. Сontrolled element pattern</h2>
      <InputField />
      <h2 className={styles.title}>Forms. Textarea Tag</h2>
      <TextArea />
    </div>
  );
}

export default App;
