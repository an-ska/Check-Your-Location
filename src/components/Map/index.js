import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css';
import MapMarker from '../MapMarker';

class Map extends Component {
  render() {
    return (
      <div className={styles.map}>
        <GoogleMapReact
          defaultZoom={11}
          center={[this.props.latitude, this.props.longitude]}
          >
          <MapMarker
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            text="Here!"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
