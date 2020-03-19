import React, { Component } from 'react';
import './SearchForm.css';


class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchValue: ''
    }
  }

  updateFormState = (event) => {
    this.setState({searchValue: event.target.value})
  }

  getArticles = (event) => {
    event.preventDefault();
    this.props.filterSearch(this.state.searchValue)
  }

  render() {
    return (
      <nav>
        <h1>Whats New?</h1>
        <form>
          <input
            name="search"
            placeholder="Enter an Article Name"
            value={this.state.searchValue}
            onChange={this.updateFormState}
          />
          <button onClick={this.getArticles} className="search-button">Submit</button>
        </form>
      </nav>
    )
  }
}

export default SearchForm;