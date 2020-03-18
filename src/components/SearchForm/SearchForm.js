import React, { Component } from 'react';
import './SearchForm.css';


class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    }
  }

  updateState = () => {
    this.setState({searchValue: [event.target.value]})
  }

  render() {
    return (
      <nav>
        <h1>Whats New?</h1>
        <form>
          <input
            name="search"
            onChange={this.updateState}
            value={this.state.searchValue} />
        </form>
        <button>Search</button>
      </nav>
    )
  }
}

export default SearchForm;