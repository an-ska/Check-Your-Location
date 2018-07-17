import React, { Component, Fragment } from "react";
import styles from "./LocationApp.module.css";
import SearchForm from "../../components/SearchForm";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Map from "../../components/Map";
import IPInformation from "../../components/IPInformation";
import AllSearchInformation from "../../components/AllSearchInformation";

const apiUrl = "http://api.ipstack.com/";
const apiKey = "6bec72027b1965bcb7b7078ceb53db2a";

class LocationApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: "",
      searchedLocation: [],
      hasError: false,
      isLoading: false
    }
  }

  componentDidMount() {
    this.getUserLocation();
    sessionStorage.getItem("searchHistory")
    &&
    this.setState({
      searchedLocation: JSON.parse(sessionStorage.getItem("searchHistory"))
    });
  }

  componentWillUpdate(nextProps, nextState) {
    sessionStorage.setItem("searchHistory", JSON.stringify(nextState.searchedLocation));
  }

  getUserLocation = () => {
    const requestUrl = `${apiUrl}check?access_key=${apiKey}`;

    this.setState({
      isLoading: true
    })

    fetch(requestUrl)
      .then((response) => response.json())
      .then(userLocation => {
        this.setState({
          userLocation: {
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            ip: userLocation.ip,
            city: userLocation.city,
            capital: userLocation.location.capital,
            country: userLocation.country_name,
            flag: userLocation.location.country_flag_emoji,
            continent: userLocation.continent_name,
            callingCode: userLocation.location.calling_code
          },
        })
      })
      .catch(e => {
        this.setState({
          hasError: true,
        })
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        })
      });
  }

  getSearchedLocation = (ip) => {
	  const requestUrl = `${apiUrl}${ip}?access_key=${apiKey}`;

  	fetch(requestUrl)
      .then((response) => response.json())
      .then(searchedLocation => {
        this.setState({
          searchedLocation: [
            ...this.state.searchedLocation,
            searchedLocation,
          ],
        })
      })
      .catch(e => {
        this.setState({
          hasError: true,
        })
      });
  }

  render() {
    const { isLoading, hasError, userLocation, searchedLocation } = this.state;
    const lastSearch = searchedLocation[searchedLocation.length -1];
    let id = 0;

    return (
      <div className={styles.mainBox}>
        <div className={styles.fullWidthBox}>
          {
            hasError
            &&
            <ErrorMessage
              icon="fa-exclamation-circle"
              text="Results cannot be shown"
            />
          }
        </div>
        {
          isLoading
          ?
          <div className={styles.fullWidthBox}>
            <Loader
              text="Loading..."
            />
          </div>
          :
          <Fragment>
            <h1 className={styles.title}>Check Your Location!</h1>
            <div className={`${styles.allSearchInformationBox} ${styles.box}`}>
              <h2 className={styles.subtitle}>All search information</h2>
              {
                searchedLocation.map(data => (
                  <AllSearchInformation
                    key={id++}
                    ip={data.ip}
                    city={data.city}
                    country={data.country_name}
                    flag={data.location.country_flag_emoji}
                    continent={data.continent_name}
                  />
                ))
              }
            </div>
            <div className={`${styles.mapBox} ${styles.box}`}>
              <h2 className={styles.subtitle}>Your location</h2>
              <Map
                latitude={userLocation.latitude}
                longitude={userLocation.longitude}
              />
            </div>
            <div className={`${styles.informationBox} ${styles.box}`}>
              <h2 className={styles.subtitle}>Information about your location</h2>
              <IPInformation
                ip={userLocation.ip}
                city={userLocation.city}
                capital={userLocation.capital}
                country={userLocation.country}
                flag={userLocation.flag}
                continent={userLocation.continent}
                callingCode={userLocation.callingCode}
              />
            </div>
            <div className={`${styles.formBox} ${styles.box}`}>
              <SearchForm getSearchedLocation={this.getSearchedLocation} />
            </div>
            <div className={`${styles.mapBox} ${styles.box}`}>
              <h2 className={styles.subtitle}>Last search location</h2>
              {
                searchedLocation.length > 0
                &&
                <Map
                  className={styles.mapBox}
                  latitude={lastSearch.latitude}
                  longitude={lastSearch.longitude}
                />
              }
            </div>
            <div className={`${styles.informationBox} ${styles.box}`}>
              <h2 className={styles.subtitle}>Last search information</h2>
              {
                searchedLocation.length > 0
                &&
                <IPInformation
                  ip={lastSearch.ip}
                  city={lastSearch.city}
                  capital={lastSearch.location.capital}
                  country={lastSearch.country_name}
                  flag={lastSearch.location.country_flag_emoji}
                  continent={lastSearch.continent_name}
                  callingCode={lastSearch.location.calling_code}
                />
              }
            </div>
          </Fragment>
        }
      </div>
    )
  }
}

export default LocationApp;
