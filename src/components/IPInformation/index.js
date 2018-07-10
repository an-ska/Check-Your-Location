import React from "react";
import styles from "./IPInformation.module.css";

const IPInformation = ({ ip, city, capital, country, flag, continent, callingCode }) => (
  <div className={styles.textBox}>
    <p className={styles.text}>IP: {ip} </p>
    {
      city != null
      &&
      <p className={styles.text}>city: {city} </p>
    }
    {
      capital != null
      &&
      <p className={styles.text}>capital: {capital} </p>
    }
    {
      country != null
      &&
      <p className={styles.text}>country: {country} </p>
    }
    {
      flag != null
      &&
      <p className={styles.text}>country flag: {flag} </p>
    }
    {
      continent != null
      &&
      <p className={styles.text}>continent: {continent} </p>
    }
    {
      callingCode != null
      &&
      <p className={styles.text}>calling code: {callingCode} </p>
    }
  </div>
)

export default IPInformation;
