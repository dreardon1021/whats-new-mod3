import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment.js';
import health from '../../data/health.js';
import science from '../../data/science.js';
import technology from '../../data/technology.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js';

import './App.css';

const INITIAL_STATE = {
  news: {
    local: local,
    entertainment: entertainment,
    health: health,
    science: science,
    technology: technology,
    category: local
  }
}

let CURRENT_CATEGORY = {
  news: {
    category: local
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: {
        local: local,
        entertainment: entertainment,
        health: health,
        science: science,
        technology: technology,
        category: local
      }
    }
  }

  updateState = (event) => {
    this.setState({news: {category: INITIAL_STATE.news[event.target.id]}})
    CURRENT_CATEGORY = {news: {category: INITIAL_STATE.news[event.target.id]}}
    console.log(CURRENT_CATEGORY)
  }

  filterSearch = (searchValue) => {
    let lowerSearchValue = searchValue.toLowerCase()
    let foundArticles = CURRENT_CATEGORY.news.category.filter(article => {
      let lowerHeadline = article.headline.toLowerCase()
      return lowerHeadline.includes(lowerSearchValue)
    })
    this.setState({news: {category: foundArticles}})
  }


  render () {
    return (
      <div className="app">
        <SearchForm filterSearch={this.filterSearch} />
        <main>
          <Menu updateState={this.updateState} />
          <NewsContainer articles={this.state.news.category}/>
        </main>
      </div>
    );
  }
}

export default App;
