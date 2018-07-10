import React from "react";
import styles from "./MapMarker.module.css";

const MapMarker = ({ icon }) => (
  <div className={styles.mapMarker}>
    <i className={`fas fa-lg ${icon}`} />
  </div>
);

export default MapMarker;
