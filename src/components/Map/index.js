import React from "react";
import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css';
import MapMarker from '../MapMarker';

const Map = ({ latitude, longitude }) => (
  <div className={styles.map}>
    <GoogleMapReact
      defaultZoom={11}
      center={[latitude, longitude]}
      >
      <MapMarker
        latitude={latitude}
        longitude={longitude}
        text="Here!"
      />
    </GoogleMapReact>
  </div>
)

export default Map;
