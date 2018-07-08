import React from 'react';
import styles from './AllSearchInformation.module.css';

const AllSearchInformation = ({ ip, city, country, flag, continent }) => (
  <div className={styles.container}>
    <p>IP: {ip} </p>
    {
      city != null
      &&
      <p>city: {city} </p>
    }
    <p>country: {country} </p>
    <p>country flag: {flag} </p>
    <p>continent: {continent}</p>
  </div>
)

export default AllSearchInformation;
