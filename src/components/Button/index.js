import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, handleClick }) => (
  <button
    className={styles.buttonBox}
    type="button"
    onClick={handleClick}
  >
    {text}
  </button>
);

export default Button;
