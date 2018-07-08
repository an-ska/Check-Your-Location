import React, { Component } from 'react';
import styles from './SearchForm.module.css';
import Button from '../Button';

const validIPFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

class SearchForm extends Component {
  state = {
    input: ""
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  }

  handleClick = () => {
    this.manageSubmittedInput();
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.manageSubmittedInput();
    }
  }

  manageSubmittedInput = () => {
    if (this.state.input.match(validIPFormat)) {
      this.props.getSearchedLocation(this.state.input);
    } else {
      alert("Please enter valid IP")
    }

    this.setState({
      input: ""
    });
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <label>Enter IP</label>
        <Button
          text="Search"
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default SearchForm;
