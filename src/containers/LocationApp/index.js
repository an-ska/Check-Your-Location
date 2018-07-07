import React, { Component, Fragment } from 'react';
import styles from './LocationApp.module.css';
import SearchForm from '../../components/SearchForm';

const apiUrl = 'http://api.ipstack.com/';
const apiKey = '6bec72027b1965bcb7b7078ceb53db2a';

class LocationApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
    }
  }

  componentDidMount() {
    this.getLocation('89.64.51.124')
  }

  getLocation = (ip) => {
	  const requestUrl = `${apiUrl}${ip}?access_key=${apiKey}`;
    console.log(requestUrl)

  	fetch(requestUrl)
      .then((response) => response.json())
      .then(location => {
        return this.setState({
          location: [
            ...this.state.location,
            location,
          ],
        })
      })
  }

  render() {
    const { location } = this.state;
    console.log(this.state.location)

    return (
      <div className={styles.container}>
        <h1>Check Your Location!</h1>
        <SearchForm getLocation={this.getLocation} />
      </div>
    )
  }
}

export default LocationApp;
