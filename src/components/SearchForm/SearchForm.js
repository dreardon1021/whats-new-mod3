import React, { Component } from 'react';
import './SearchForm.css';


class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    }
  }

  updateState = (event) => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    return (
      <nav>
        <h1>Whats New?</h1>
        <form>
          <input
            name="search"
            placeholder="Enter an Article Name"
            onChange={this.updateState}
            value={this.state.searchValue} />
          <button className="search-button">Search</button>
        </form>
      </nav>
    )
  }
}

export default SearchForm;