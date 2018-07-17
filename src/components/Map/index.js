import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.css";
import MapMarker from "../MapMarker";
import ErrorMessage from "../ErrorMessage";

const Map = ({ latitude, longitude }) => (
  <div className={styles.map}>
    {
      latitude != null || longitude != null
      ?
      <GoogleMapReact
        defaultZoom={11}
        center={[latitude, longitude]}
        >
        <MapMarker
          lat={latitude}
          lng={longitude}
          icon="fa-map-marker-alt"
        />
      </GoogleMapReact>
      :
      <ErrorMessage
        icon="fa-frown"
        text="Sorry, location cannot be found"
      />
    }

  </div>
)

export default Map;
