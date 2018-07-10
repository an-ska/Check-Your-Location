import React, { Component, Fragment } from "react";
import styles from "./SearchForm.module.css";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

const validIPFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

class SearchForm extends Component {
  state = {
    input: "",
    invalidInput: false
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
      invalidInput: false
    });
  }

  handleClick = () => {
    this.manageSubmittedInput();
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.manageSubmittedInput();
    }
  }

  manageSubmittedInput = () => {
    if (this.state.input.match(validIPFormat)) {
      this.props.getSearchedLocation(this.state.input);
    } else {
      this.setState({
        invalidInput: true
      })
    }

    this.setState({
      input: ""
    });
  }

  render() {
    const { input, invalidInput } = this.state;

    return (
      <Fragment>
        {
          invalidInput &&
          <ErrorMessage
            icon="fa-exclamation-triangle"
            text="Please enter valid IP"
          />
        }
        <div className={styles.searchBox}>
          <input
            type="text"
            value={input}
            placeholder="Enter IP"
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <Button
            text="Search"
            handleClick={this.handleClick}
          />
        </div>
      </Fragment>
    )
  }
}

export default SearchForm;
