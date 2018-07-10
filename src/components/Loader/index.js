import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ text }) => (
  <p className={styles.loader}>{text}</p>
)

export default Loader;
