import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, handleClick }) => (
  <button
    className={styles.buttonWrapper}
    onClick={handleClick}
  >
    {text}
  </button>
);

export default Button;
