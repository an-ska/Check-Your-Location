import React from "react";
import styles from './MapMarker.module.css';

const MapMarker = ({ text }) => (
  <div className={styles.mapMarker}>
    {text}
  </div>
);

export default MapMarker;
