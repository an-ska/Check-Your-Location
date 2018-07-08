import React, { Component } from 'react';
import styles from './SearchForm.module.css';
import Button from '../Button';

class SearchForm extends Component {
  state = {
    input: ""
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  }

  handleClick = () => {
    this.props.getSearchedLocation(this.state.input);
    this.setState({
      input: ""
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.getSearchedLocation(this.state.input);
      this.setState({
        input: ""
      })
    }
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={this.updateInput}
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
