import React from "react";
import styles from "./AllSearchInformation.module.css";

const AllSearchInformation = ({ ip, city, country, flag, continent }) => (
  <div className={styles.textBox}>
    <p className={styles.text}>IP: {ip} </p>
    {
      city != null
      &&
      <p className={styles.text}>city: {city} </p>
    }
    {
      country != null
      &&
      <p className={styles.text}>country: {country} </p>
    }
    {
      flag != null
      &&
      <p className={styles.text}>country flag:
        <img
          src={flag}
          className={styles.flag}
          alt="Country flag"
        />
      </p>
    }
    {
      continent != null
      &&
      <p className={styles.text}>continent: {continent}</p>
    }
  </div>
)

export default AllSearchInformation;
