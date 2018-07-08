import React, { Component, Fragment } from 'react';
import styles from './LocationApp.module.css';
import SearchForm from '../../components/SearchForm';
import Map from '../../components/Map';
import IPInformation from '../../components/IPInformation';
import AllSearchInformation from '../../components/AllSearchInformation';

const apiUrl = 'http://api.ipstack.com/';
const apiKey = '6bec72027b1965bcb7b7078ceb53db2a';

class LocationApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: "",
      searchedLocation: []
    }
  }

  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocation = () => {
    const requestUrl = `${apiUrl}check?access_key=${apiKey}`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then(user => {
        return this.setState({
          userLocation: {
            latitude: user.latitude,
            longitude: user.longitude,
            ip: user.ip,
            city: user.city,
            capital: user.location.capital,
            country: user.country_name,
            flag: user.location.country_flag_emoji,
            continent: user.continent_name,
            callingCode: user.location.calling_code
           }
        })
      })
  }

  getSearchedLocation = (ip) => {
	  const requestUrl = `${apiUrl}${ip}?access_key=${apiKey}`;

  	fetch(requestUrl)
      .then((response) => response.json())
      .then(searchedLocation => {
        return this.setState({
          searchedLocation: [
            ...this.state.searchedLocation,
            searchedLocation,
          ],
        })
      })
  }

  render() {
    const { userLocation, searchedLocation } = this.state;
    const lastSearch = searchedLocation[searchedLocation.length -1];

    return (
      <div className={styles.container}>
        <h1>Check Your Location!</h1>
        <Map
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}
        />
        <h2 className={styles.title}>Information about your location</h2>
        <IPInformation
          ip={userLocation.ip}
          city={userLocation.city}
          capital={userLocation.capital}
          country={userLocation.country}
          flag={userLocation.flag}
          continent={userLocation.continent}
          callingCode={userLocation.callingCode}
        />

        <SearchForm getSearchedLocation={this.getSearchedLocation} />
        {
          searchedLocation.length > 0 &&
            <div>
              <Map
                latitude={lastSearch.latitude}
                longitude={lastSearch.longitude}
              />
              <h2 className={styles.title}>Last search information</h2>
              <IPInformation
                ip={lastSearch.ip}
                city={lastSearch.city}
                capital={lastSearch.location.capital}
                country={lastSearch.country_name}
                flag={lastSearch.location.country_flag_emoji}
                continent={lastSearch.continent_name}
                callingCode={lastSearch.location.calling_code}
              />
              <h2 className={styles.title}>All search information</h2>
              {
                searchedLocation.map(data => (
                  <AllSearchInformation
                    ip={data.ip}
                    city={data.city}
                    country={data.country_name}
                    flag={data.location.country_flag_emoji}
                    continent={data.continent_name}
                  />
                ))
              }
            </div>
        }
      </div>
    )
  }
}

export default LocationApp;
