import React, { Component, Fragment } from 'react';
import styles from './LocationApp.module.css';
import SearchForm from '../../components/SearchForm';
import Map from '../../components/Map';
import LastSearchInformation from '../../components/LastSearchInformation';
import AllSearchInformation from '../../components/AllSearchInformation';

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
    const lastSearch = location[location.length -1];
    console.log(this.state.location)

    return (
      <div className={styles.container}>
        <h1>Check Your Location!</h1>
        <SearchForm getLocation={this.getLocation} />
        {
          location.length > 0 &&
            <div>
              <Map
                latitude={lastSearch.latitude}
                longitude={lastSearch.longitude}
              />
              <h2 className={styles.title}>Last search information</h2>
              <LastSearchInformation
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
                location.map(data => (
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
