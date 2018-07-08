import React from 'react';
import styles from './IPInformation.module.css';

const IPInformation = ({ ip, city, capital, country, flag, continent, callingCode }) => (
  <div>
    <p>IP: {ip} </p>
    {
      city != null
      &&
      <p>city: {city} </p>
    }
    {
      capital != null
      &&
      <p>capital: {capital} </p>
    }

    <p>country: {country} </p>
    <p>country flag: {flag} </p>
    <p>continent: {continent} </p>
    {
      callingCode != null
      &&
      <p>calling code: {callingCode} </p>
    }
  </div>
)

export default IPInformation;